type CardLinkProps = {
  icon: string;
  title: string;
  description: string;
  url: string;
  color: string;
};

export const CardLink = ({
  icon,
  title,
  description,
  url,
  color,
}: CardLinkProps) => {
  function openLink(url: string) {
    window.open(url, "_blank");
  }

  return (
    <div className="card link" onClick={() => openLink(url)}>
      <div className="card-body">
        <div className="row no-gutters">
          <div className="col-auto">
            <div
              className="link-icon"
              style={{
                backgroundColor: color,
              }}
            >
              <img src={"./assets/icons/" + icon + ".svg"} alt="link icon" />
            </div>
          </div>
          <div className="col">
            <h3 className="card-title mb-0">{title}</h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
