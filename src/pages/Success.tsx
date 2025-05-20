import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Result, Button } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'

const Success: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 5000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <Result
          icon={<CheckCircleFilled style={{ color: '#52c41a', fontSize: '72px' }} />}
          status="success"
          title="提交成功！"
          subTitle="我们会尽快审核你的作品，请耐心等待。"
          extra={[
            <Button type="primary" key="home" onClick={() => navigate('/')}>
              返回首页
            </Button>
          ]}
        />
      </div>
    </div>
  )
}

export default Success 