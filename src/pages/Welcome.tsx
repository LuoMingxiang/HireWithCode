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
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes rotateIn {
            from { 
              transform: rotate(-180deg) scale(0);
              opacity: 0;
            }
            to { 
              transform: rotate(0) scale(1);
              opacity: 1;
            }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes glow {
            0% { text-shadow: 0 0 5px rgba(0,0,0,0.1); }
            50% { text-shadow: 0 0 20px rgba(0,0,0,0.2); }
            100% { text-shadow: 0 0 5px rgba(0,0,0,0.1); }
          }
          .fade-in {
            animation: fadeIn 1s ease-out;
          }
          .slide-up {
            animation: slideUp 0.8s ease-out;
          }
          .rotate-in {
            animation: rotateIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .float {
            animation: float 3s ease-in-out infinite;
          }
          .glow {
            animation: glow 2s ease-in-out infinite;
          }
        `}
      </style>
      <div className="text-center">
        <div className="rotate-in float">
          <img
            src="/logo.png"
            alt="Logo"
            className="mx-auto w-32 h-32 mb-4"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 slide-up glow">
          欢迎来到 infist 线上面试环节，期待你的加入！
        </h1>
      </div>
    </div>
  )
}

export default Welcome 