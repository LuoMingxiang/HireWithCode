import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AcceptChallenge: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    githubId: '',
    email: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 这里可以添加表单验证和提交逻辑
    navigate('/submit')
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
        <h2 className="text-2xl font-bold text-center mb-6">接受挑战</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="githubId" className="block text-sm font-medium text-gray-700">
              GitHub ID
            </label>
            <input
              type="text"
              id="githubId"
              name="githubId"
              value={formData.githubId}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              邮箱
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            接受挑战
          </button>
        </form>
      </div>
    </div>
  )
}

export default AcceptChallenge 