import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/guide')
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <img src="/logo.png" alt="Logo" className="mx-auto w-32 h-32 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800">
          欢迎来到 infist 线上面试环节，期待你的加入！
        </h1>
      </div>
    </div>
  )
}

export default Welcome 