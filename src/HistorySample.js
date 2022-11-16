import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function HistorySample() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1);
  }
  const goHome = () => {
    navigate('/') //방문 기록이 남음
  }
  const replaceHome = () => {
    navigate('/', { replace: true }) //방문 기록이 남지 않음
  }

  useEffect(() => {

  }, [history])
  return (
    <div>
      <button onClick={goBack}>back</button>
      <button onClick={goHome}>Home</button>
      <button onClick={replaceHome}>Home(repalce)</button>

    </div>
  )
}
export default HistorySample;
