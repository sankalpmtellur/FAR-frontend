export type IssueType = 'Crack' | 'Broken Tile' | 'Water Leakage' | 'Electrical Issue'

export type Issue = {
  id: string
  image: string
  type: IssueType
  building: string
  floor?: string
  description: string
  createdAt: Date
}
