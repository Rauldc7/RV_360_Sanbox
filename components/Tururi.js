import React from "react";
export default class extends React.Component {
  render() {
    return (
      <div className="wrapperScena">
        <iframe
          className="scenaVR"
          src={this.props.url}
          title="W3Schools Free Online Web Tutorials"
        />

        <style jsx global>{`
          .scenaVR {
            display: inline;
            width: 90%;
            min-height: 40em;
            border: none;
          }
          .wrapperScena {
            width: 100%;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}
