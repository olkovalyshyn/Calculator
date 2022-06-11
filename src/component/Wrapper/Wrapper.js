import s from './wrapper.module.css';

function Wrapper(props) {
  return <div className={s.container}>{props.children}</div>;
}

export default Wrapper;
