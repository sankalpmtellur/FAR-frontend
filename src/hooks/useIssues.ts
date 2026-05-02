import { useState } from 'react'
import type { Issue } from '../types/issue'

const initialIssues: Issue[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    type: 'Crack',
    building: 'Engineering Block',
    floor: '2',
    description: 'Visible wall crack near the central stairwell corridor.',
    createdAt: new Date('2026-04-20T10:00:00'),
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    type: 'Broken Tile',
    building: 'Library Annex',
    floor: '1',
    description: 'Loose and broken floor tile causing a tripping hazard.',
    createdAt: new Date('2026-04-22T09:30:00'),
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80',
    type: 'Water Leakage',
    building: 'Science Complex',
    description: 'Persistent leakage observed below AC duct near Lab 4.',
    createdAt: new Date('2026-04-25T12:15:00'),
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1523419409543-a5e549c1c0d0?auto=format&fit=crop&w=1200&q=80',
    type: 'Electrical Issue',
    building: 'Auditorium Wing',
    floor: 'Ground',
    description: 'Flickering ceiling lights reported during evening lectures.',
    createdAt: new Date('2026-04-28T18:20:00'),
  },
]

export function useIssues() {
  const [issues, setIssues] = useState<Issue[]>(initialIssues)

  const addIssue = (issue: Omit<Issue, 'id' | 'createdAt'>) => {
    setIssues((prev) => [
      {
        ...issue,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      },
      ...prev,
    ])
  }

  const deleteIssue = (id: string) => {
    setIssues((prev) => prev.filter((issue) => issue.id !== id))
  }

  const getIssues = () => issues

  return { addIssue, deleteIssue, getIssues }
}
