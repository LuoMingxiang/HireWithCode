import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import "github-markdown-css/github-markdown-light.css"

const Guide: React.FC = () => {
  const navigate = useNavigate()
  const [guideContent,setGuideContent] = useState(``)
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/LuoMingxiang/HireWithCode/main/README.md')
      .then(res => res.text())
      .then(setGuideContent)
      .catch(err => console.error('加载失败:', err));
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose prose-lg">
          {guideContent}
        </ReactMarkdown>
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/accept')}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            开始挑战
          </button>
        </div>
      </div>
    </div>
  )
}

export default Guide 