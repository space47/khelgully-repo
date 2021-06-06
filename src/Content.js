import "./Content.css";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";

function Content() {
  return (
    <div className="content">
      <div className="content_text">
        <div class="content_text_icon">
          <VideogameAssetIcon />
        </div>
        <h3>TEAMXX001</h3>
      </div>
      <div className="content_game">
        <h3>CALL OF DUTY</h3>
      </div>
      <div className="content_role">
        <h5>Member</h5>
      </div>
      <div className="content_number">
        <h5>10</h5>
      </div>
      <div className="content_action">
        <div className="content_action_buttton">
          <OfflineBoltIcon />
        </div>
      </div>
    </div>
  );
}

export default Content;
