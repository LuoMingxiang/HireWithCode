import { useState } from 'react'
import { Form, Input, Button, Card, message } from 'antd'

const SubmitWork: React.FC = () => {
  const [form] = Form.useForm()

  const handleSubmit = async (values: { githubUrl: string; vercelUrl: string }) => {
    try {
      // TODO: 这里可以添加表单验证和提交逻辑
      message.success('提交成功！我们会尽快审核你的作品。')
      form.resetFields()
    } catch (error) {
      message.error('提交失败，请稍后重试')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">提交作品</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="GitHub 仓库 URL"
            name="githubUrl"
            rules={[
              { required: true, message: '请输入 GitHub 仓库地址' },
              { type: 'url', message: '请输入有效的 URL 地址' }
            ]}
          >
            <Input placeholder="https://github.com/username/repo" />
          </Form.Item>

          <Form.Item
            label="Vercel 在线体验地址"
            name="vercelUrl"
            rules={[
              { required: true, message: '请输入 Vercel 在线体验地址' },
              { type: 'url', message: '请输入有效的 URL 地址' }
            ]}
          >
            <Input placeholder="https://your-project.vercel.app" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              提交作品
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default SubmitWork 