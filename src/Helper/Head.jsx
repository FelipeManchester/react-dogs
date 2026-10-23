// React 19 moves <title> and <meta> into the document <head> on its own
const Head = ({ title, description }) => {
  return (
    <>
      <title>{`${title} | Dogs`}</title>
      {description && <meta name='description' content={description} />}
    </>
  );
};

export default Head;
