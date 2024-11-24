import React, { useState, useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  level: number;
  years: number;
  proficiency?: number;
  dependencies?: string[];
  description?: string;
  category?: string;
}

interface SkillTreeProps {
  skills: {
    frontend: Skill[];
    backend: Skill[];
    database: Skill[];
    devops: Skill[];
  };
}

const getCategoryColor = (category: string) => {
  const colors = {
    frontend: '#3B82F6', // blue
    backend: '#10B981', // green
    database: '#EF4444', // red
    devops: '#8B5CF6', // purple
  };
  return colors[category as keyof typeof colors] || '#6B7280';
};

const SkillNode = ({ data }: { data: any }) => (
  <div
    className={`px-4 py-2 shadow-lg rounded-lg border-2 ${
      data.isCategory ? 'min-w-[180px]' : 'min-w-[150px]'
    }`}
    style={{
      background: data.isCategory ? getCategoryColor(data.category) : 'white',
      borderColor: getCategoryColor(data.category),
    }}
  >
    <div className={`font-semibold ${data.isCategory ? 'text-white text-lg' : 'text-gray-800'}`}>
      {data.label}
    </div>
    {!data.isCategory && (
      <div className="text-sm text-gray-500">
        Level: {data.level}/10 • {data.years}y exp
      </div>
    )}
  </div>
);

const SkillMap: React.FC<SkillTreeProps> = ({ skills }) => {
  const [selectedNode, setSelectedNode] = useState<any>(null);

  // Convert skills data to nodes and edges
  const initialNodes: any[] = [];
  const initialEdges: any[] = [];
  let nodeId = 1;
  const nodePositions: { [key: string]: { x: number; y: number } } = {};

  // Add category nodes
  Object.entries(skills).forEach(([category, _], categoryIndex) => {
    const x = categoryIndex * 400;
    const y = 50;
    nodePositions[category] = { x, y };
    initialNodes.push({
      id: category,
      position: { x, y },
      data: { label: category, category, isCategory: true },
      type: 'skillNode',
    });
  });

  // Add skill nodes and connect them
  Object.entries(skills).forEach(([category, categorySkills]) => {
    categorySkills.forEach((skill, skillIndex) => {
      const id = `${skill.name}-${nodeId++}`;
      const x = nodePositions[category].x + (skillIndex % 2 === 0 ? -100 : 100);
      const y = nodePositions[category].y + 150 + Math.floor(skillIndex / 2) * 100;

      initialNodes.push({
        id,
        position: { x, y },
        data: {
          label: skill.name,
          ...skill,
          category,
        },
        type: 'skillNode',
      });

      // Connect to category
      initialEdges.push({
        id: `e${category}-${id}`,
        source: category,
        target: id,
        type: 'smoothstep',
        animated: true,
      });

      // Add dependency connections
      if (skill.dependencies) {
        skill.dependencies.forEach(dep => {
          const depNode = initialNodes.find(n => n.data.label === dep);
          if (depNode) {
            initialEdges.push({
              id: `e${depNode.id}-${id}`,
              source: depNode.id,
              target: id,
              type: 'smoothstep',
              style: { stroke: '#94A3B8' },
            });
          }
        });
      }
    });
  });

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback((_: React.MouseEvent, node: any) => {
    setSelectedNode(node.data);
  }, []);

  const nodeTypes = {
    skillNode: SkillNode,
  };

  return (
    <div className="w-full h-screen">
      {/* Legend */}
      <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded-lg shadow">
        <h3 className="font-medium mb-2">Skill Categories</h3>
        {Object.keys(skills).map(category => (
          <div key={category} className="flex items-center gap-2 mb-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getCategoryColor(category) }}
            />
            <span className="capitalize">{category}</span>
          </div>
        ))}
      </div>

      {/* Selected Node Info */}
      {selectedNode && !selectedNode.isCategory && (
        <Card className="absolute bottom-4 left-4 z-10 w-80">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg">{selectedNode.label}</h3>
              <Badge
                variant="secondary"
                className="capitalize"
              >
                {selectedNode.category}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Level</p>
                <p className="font-medium text-lg">{selectedNode.level}/10</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-medium text-lg">{selectedNode.years} years</p>
              </div>
            </div>
            {selectedNode.proficiency !== undefined && (
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Proficiency</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2 transition-all duration-300"
                    style={{ width: `${selectedNode.proficiency}%` }}
                  />
                </div>
              </div>
            )}
            <p className="text-sm text-gray-600">{selectedNode.description}</p>
          </CardContent>
        </Card>
      )}

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.5}
        maxZoom={2}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
      >
        <Controls />
        <MiniMap />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export  {SkillMap};