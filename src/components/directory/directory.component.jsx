import React from "react";
import MenuItem from "../menu-item/menu-item.component";
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/cvpntL1/jackets.png",
          id: 2
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/cvpntL1/sneakers.png",
          id: 3
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/cvpntL1/womens.png",
          id: 4
        },
        {
          title: "mens",
          imageUrl:
            "http://media-cdn.list.ly/production/26911/220942/220942-photoshare-public-health-photos-and-international-development-images-free-for-nonprofit-educational-use_185px.png?ver=6646969176",
          id: 5
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
