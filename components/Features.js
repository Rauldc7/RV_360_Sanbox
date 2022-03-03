import { MdAddAPhoto } from "react-icons/md";
import {
  AiOutlineReload,
  AiOutlineVideoCameraAdd,
  AiOutlineFileSearch,
  AiOutlineCamera
} from "react-icons/ai";

export default props => {
  return (
    <>
      <style global jsx>{`
        .wrapperFeatures {
          text-align: center;
          width: 100%;
        }
        .contentFeatures {
          // margin-top: 4em !important;
          padding: 2em;
        }
        .linieFeatures {
          padding-bottom: 1em;
        }
        .feature {
          display: inline-block;
          vertical-align: top;
          width: 50%;
          min-height: 3em;
          padding-bottom: 2em;
        }
        .featureTitlu h3 {
          padding-bottom: 0.4em;
          font-size: 1.1em;
          font-weight: 800;
        }
        .featureIcon {
          display: inline;
          color: #662d91;
        }
        .featureText {
          display: inline;
          line-height: 2em;
          font-size: 1.1em;
        }
        @media (min-width: 1600px) {
          .feature {
            width: 25%;
          }
        }
        @media (max-width: 900px) {
          .feature {
            width: 100%;
          }
        }
        hr {
        }
      `}</style>
      <div className="wrapperFeatures">
        <div className="contentFeatures">
          <div className="linieFeatures">
            <div className="feature">
              <hr />
              <div className="featureIcon">
                <AiOutlineCamera size="7em" />
              </div>
              <div className="featureText">
                <h3 className="featureTitlu">Fotografie 360</h3>
                Fotografie imersiva la cea mai buna rezolutie de pe piata
              </div>
            </div>
            <div className="feature">
              <hr />
              <div className="featureIcon">
                <AiOutlineReload size="7em" />
              </div>
              <div className="featureText">
                <h3 className="featureTitlu">Tururi Virtuale</h3>
                360° Virtual tours add perspective and value to any listing
              </div>
            </div>
            <div className="feature">
              <hr />
              <div className="featureIcon">
                <AiOutlineVideoCameraAdd size="7em" />
              </div>
              <div className="featureText">
                <h3 className="featureTitlu">Tururi 360 Video</h3>
                Se poate folosi 360° video prin youtube, pe orice site de
                socializare!
              </div>
            </div>
            <div className="feature">
              <hr />
              <div className="featureIcon">
                <AiOutlineFileSearch size="7em" />
              </div>
              <div className="featureText">
                <h3 className="featureTitlu">Acces complet la poze</h3>
                Un foldr dedicat unde pastram pozele si filmarile pentru
                dumneavoastra
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};
