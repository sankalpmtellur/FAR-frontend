import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ImagePlus, UploadCloud } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import type { Issue, IssueType } from '../types/issue'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'

const issueTypes: IssueType[] = ['Crack', 'Broken Tile', 'Water Leakage', 'Electrical Issue']

type FormValues = {
  type: IssueType
  building: string
  floor: string
  description: string
}

const initialForm: FormValues = {
  type: 'Crack',
  building: '',
  floor: '',
  description: '',
}

export function ReportIssuePage({ onAddIssue }: { onAddIssue: (issue: Omit<Issue, 'id' | 'createdAt'>) => void }) {
  const navigate = useNavigate()
  const [form, setForm] = useState<FormValues>(initialForm)
  const [image, setImage] = useState<string>('')

  const canSubmit = useMemo(() => image && form.building.trim() && form.description.trim(), [image, form])

  const handleFile = (file: File | undefined) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setImage(String(reader.result ?? ''))
    reader.readAsDataURL(file)
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto flex w-full max-w-6xl items-start justify-center px-4 pb-16 pt-8 sm:px-6 lg:px-8"
    >
      <Card className="w-full max-w-2xl rounded-3xl border-red-100 bg-white shadow-lg">
        <CardHeader className="space-y-2 p-6 sm:p-8">
          <CardTitle className="text-2xl font-bold text-slate-900">Report an Issue</CardTitle>
          <p className="text-sm text-slate-600">Share details with a clear photo so the team can resolve it quickly.</p>
        </CardHeader>

        <CardContent className="space-y-6 p-6 pt-0 sm:p-8 sm:pt-0">
          <div className="space-y-2">
            <Label htmlFor="image-upload">Image Upload</Label>
            <label
              htmlFor="image-upload"
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-red-200 bg-red-50/60 p-8 text-center transition hover:border-red-300 hover:bg-red-50"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault()
                handleFile(e.dataTransfer.files?.[0])
              }}
            >
              <UploadCloud className="h-7 w-7 text-red-500" />
              <p className="text-sm font-medium text-slate-700">Drag & drop an image, or click to browse</p>
              <p className="text-xs text-slate-500">PNG, JPG up to 10MB</p>
            </label>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
            {image ? (
              <div className="overflow-hidden rounded-2xl border border-red-100">
                <img src={image} alt="Issue preview" className="h-56 w-full object-cover" />
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ImagePlus className="h-3.5 w-3.5" />
                Preview appears here after image selection
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="type">Issue Type</Label>
              <select
                id="type"
                value={form.type}
                onChange={(e) => setForm((prev) => ({ ...prev, type: e.target.value as IssueType }))}
                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-red-300 focus:ring-2 focus:ring-red-200"
              >
                {issueTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="building">Building Name</Label>
              <Input
                id="building"
                placeholder="e.g. Science Block"
                value={form.building}
                onChange={(e) => setForm((prev) => ({ ...prev, building: e.target.value }))}
                className="rounded-xl border-slate-200 focus-visible:ring-red-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="floor">Floor (optional)</Label>
            <Input
              id="floor"
              placeholder="e.g. 3"
              value={form.floor}
              onChange={(e) => setForm((prev) => ({ ...prev, floor: e.target.value }))}
              className="rounded-xl border-slate-200 focus-visible:ring-red-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the issue clearly..."
              rows={5}
              value={form.description}
              onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
              className="rounded-xl border-slate-200 focus-visible:ring-red-200"
            />
          </div>

          <Button
            className="h-11 w-full rounded-xl bg-red-500 text-white hover:bg-red-600"
            disabled={!canSubmit}
            onClick={() => {
              if (!canSubmit) return
              onAddIssue({
                image,
                type: form.type,
                building: form.building.trim(),
                floor: form.floor.trim() || undefined,
                description: form.description.trim(),
              })
              navigate('/')
            }}
          >
            Submit Issue
          </Button>
        </CardContent>
      </Card>
    </motion.main>
  )
}
