import { useParams } from 'react-router-dom';

export function PsiView() {
  const { feature, reportDate } = useParams<{ feature: string, reportDate: string }>();

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">AI Features</li>
      <li className="breadcrumb-item">{feature}</li>
      <li className="breadcrumb-item">{reportDate}</li>
      <li className="breadcrumb-item active">PSI</li>
    </ol>
    <main className="fullscreen">
    </main>
  </>
}