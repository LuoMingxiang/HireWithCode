import { useState } from 'react'

const SubmitWork: React.FC = () => {
  const [formData, setFormData] = useState({
    githubUrl: '',
    vercelUrl: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 这里可以添加表单验证和提交逻辑
    alert('提交成功！我们会尽快审核你的作品。')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">提交作品</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-700">
              GitHub 仓库 URL
            </label>
            <input
              type="url"
              id="githubUrl"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="https://github.com/username/repo"
              required
            />
          </div>
          <div>
            <label htmlFor="vercelUrl" className="block text-sm font-medium text-gray-700">
              Vercel 在线体验地址
            </label>
            <input
              type="url"
              id="vercelUrl"
              name="vercelUrl"
              value={formData.vercelUrl}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="https://your-project.vercel.app"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            提交作品
          </button>
        </form>
      </div>
    </div>
  )
}

export default SubmitWork 