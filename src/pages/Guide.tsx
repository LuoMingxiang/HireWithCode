import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import "github-markdown-css/github-markdown-light.css"
import { Button, Spin, Checkbox } from "antd";
const Guide: React.FC = () => {
  const navigate = useNavigate()
  const [guideContent, setGuideContent] = useState(``)
  const [loading, setLoading] = useState(true)
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://raw.githubusercontent.com/LuoMingxiang/HireWithCode/main/README.md')
      .then(res => res.text())
      .then(setGuideContent)
      .catch(err => console.error('加载失败:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 markdown-body">
        <Spin tip="数据加载中" size="large" spinning={loading}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose prose-lg">
            {guideContent}
          </ReactMarkdown>
        </Spin>
        <div className="mt-8 text-center">
          <div className="mb-4">
            <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}>
              我已阅读并同意上述内容
            </Checkbox>
          </div>
          <Button type="primary"
            onClick={() => navigate('/accept')}
            disabled={!isChecked}
          >
            开始挑战
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Guide 