const linkRenderer = (props) => {
  return <a href={props.value}>{props.data.name}</a>;
};

export default linkRenderer;
