import React from "react";

const Blog = () => {
  return (
    <div className="container py-5 mt-5">
      <h1>Blog</h1>
      <div className="row  text-start">
        <div className="col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-2">
          <div className="border m-3 p-4">
            <p>
              <b> Q1. Difference between `javascript` and `nodejs`</b>
            </p>

            <p>
              {" "}
              <b> Ans .</b> JavaScript is a lightweight, cross-platform,
              interpreted scripting programming language that is primarily used
              for client-side scripting. It's built into both Java and HTML.It
              is generally used on the client-side server. Node js It is
              generally used on the client-side server.
              <br /> <br />
              JavaScript can be run on any engine, including Spider Monkey, V8,
              and JavaScript Core . Node.js is a cross-platform, open-source
              JavaScript runtime environment that enables JavaScript to be run
              on the server. Node.js is a server-side scripting language based
              on the Google Chrome V8 engine. <br /> <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="row  text-start">
        <div className="col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-2">
          <div className="border m-3 p-4">
            <p>
              <b>
                Q2 . When should you use `nodejs` and when should you use
                `mongodb`
              </b>
            </p>
            <p>
              <b> Ans .</b> MongoDB and NodeJS are two different technologies.
              MonogDB is a database system which gives one a chance to
              efficiently store documents in a database and to perform
              operations like data updates, or to search documents by some
              criterias. <b>NodeJS's </b>
              responsibilty is especially to execute your application.
            </p>
          </div>
        </div>
      </div>
      <div className="row  text-start">
        <div className="col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-2">
          <div className="border m-3 p-4">
            <p>
              {" "}
              <b> Q3.Differences between `sql` and `nosql` databases . </b>
            </p>
            <p>
              {" "}
              <b> Ans .</b> SQL databases are table-based, while NoSQL databases
              are document, key-value, graph, or wide-column stores.
            </p>
            <p>
              SQL databases are table-based, while NoSQL databases are document,
              key-value, graph, or wide-column stores.
            </p>
            <p>
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON
            </p>
          </div>
        </div>
      </div>
      <div className="row  text-start">
        <div className="col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-2">
          <div className="border m-3 p-4">
            <p>
              {" "}
              <b> Q4. What is the purpose of `jwt` and how does it work . </b>
            </p>
            <p>
              <b> Ans .</b>
              <b> JWT, or JSON Web Token </b>, is an open standard used to share
              security information between two parties — a client and a server.
              Each JWT contains encoded JSON objects, including a set of claims.
              JWTs are signed using a cryptographic algorithm to ensure that the
              claims cannot be altered after the token is issued.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
