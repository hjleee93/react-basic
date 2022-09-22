import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './inputSample';

function App() {
  return (

    // <Counter></Counter>
    <InputSample />
    // <Wrapper>
    //   <Hello color="red" isSpecial={true} />
    //   {/* isSpecial의 값을 전달하지 않는 경우 true로 취급됨 */}
    //   <Hello name="hj" color="blue" />
    // </Wrapper>
  );
}
export default App;


