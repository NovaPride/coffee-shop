import { Helmet } from "react-helmet";

const Page404 = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page 404" />
        <title>Page 404</title>
      </Helmet>
      <div>This page doesnt exist</div>
      <a href="/">Go back</a>
    </>
  );
};

export default Page404;
