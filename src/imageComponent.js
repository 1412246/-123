import React, { Component } from "react";
import Image from "./detailImageComponent";

import "./imageComponent.scss";
export default class ImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      images: [
        {
          thumbnail:
            "https://scontent.cdninstagram.com/vp/a4e71df22c679e2dd6512182daade797/5CAD5BEF/t51.2885-15/e35/s150x150/46679566_215189556039383_4013830388084905992_n.jpg",
          standard:
            "https://scontent.cdninstagram.com/vp/1c9479a8a7a428aade8296e226b51249/5CA212AD/t51.2885-15/e35/46679566_215189556039383_4013830388084905992_n.jpg"
        },
        {
          thumbnail:
            "https://scontent.cdninstagram.com/vp/a4e71df22c679e2dd6512182daade797/5CAD5BEF/t51.2885-15/e35/s150x150/46679566_215189556039383_4013830388084905992_n.jpg",
          standard:
            "https://scontent.cdninstagram.com/vp/1c9479a8a7a428aade8296e226b51249/5CA212AD/t51.2885-15/e35/46679566_215189556039383_4013830388084905992_n.jpg"
        },
        {
          thumbnail:
            "https://scontent.cdninstagram.com/vp/a4e71df22c679e2dd6512182daade797/5CAD5BEF/t51.2885-15/e35/s150x150/46679566_215189556039383_4013830388084905992_n.jpg",
          standard:
            "https://scontent.cdninstagram.com/vp/1c9479a8a7a428aade8296e226b51249/5CA212AD/t51.2885-15/e35/46679566_215189556039383_4013830388084905992_n.jpg"
        },
        {
          thumbnail:
            "https://scontent.cdninstagram.com/vp/a4e71df22c679e2dd6512182daade797/5CAD5BEF/t51.2885-15/e35/s150x150/46679566_215189556039383_4013830388084905992_n.jpg",
          standard:
            "https://scontent.cdninstagram.com/vp/1c9479a8a7a428aade8296e226b51249/5CA212AD/t51.2885-15/e35/46679566_215189556039383_4013830388084905992_n.jpg"
        },
        {
          thumbnail:
            "https://scontent.cdninstagram.com/vp/a4e71df22c679e2dd6512182daade797/5CAD5BEF/t51.2885-15/e35/s150x150/46679566_215189556039383_4013830388084905992_n.jpg",
          standard:
            "https://scontent.cdninstagram.com/vp/1c9479a8a7a428aade8296e226b51249/5CA212AD/t51.2885-15/e35/46679566_215189556039383_4013830388084905992_n.jpg"
        },
        {
          thumbnail:
            "https://scontent.cdninstagram.com/vp/a4e71df22c679e2dd6512182daade797/5CAD5BEF/t51.2885-15/e35/s150x150/46679566_215189556039383_4013830388084905992_n.jpg",
          standard:
            "https://scontent.cdninstagram.com/vp/1c9479a8a7a428aade8296e226b51249/5CA212AD/t51.2885-15/e35/46679566_215189556039383_4013830388084905992_n.jpg"
        },
        {
          thumbnail:
            "https://scontent.cdninstagram.com/vp/a4e71df22c679e2dd6512182daade797/5CAD5BEF/t51.2885-15/e35/s150x150/46679566_215189556039383_4013830388084905992_n.jpg",
          standard:
            "https://scontent.cdninstagram.com/vp/1c9479a8a7a428aade8296e226b51249/5CA212AD/t51.2885-15/e35/46679566_215189556039383_4013830388084905992_n.jpg"
        }
      ]
    };
  }
  render() {
    let list1 = [...this.state.images].reverse();
    return (
      <div className="listImage">
        <div className="column">
          {this.state.images.map((value, index) => {
            return (
              <Image
                thumbnail={value.thumbnail}
                standard={value.standard}
                key={index}
              />
            );
          })}
        </div>
        <div className="column">
          {list1.map((value, index) => {
            return (
              <Image
                thumbnail={value.thumbnail}
                standard={value.standard}
                key={index}
              />
            );
          })}
        </div>
        <div className="column">
          {this.state.images.map((value, index) => {
            return (
              <Image
                thumbnail={value.thumbnail}
                standard={value.standard}
                key={index}
              />
            );
          })}
        </div>
        <div className="column">
          {list1.map((value, index) => {
            return (
              <Image
                thumbnail={value.thumbnail}
                standard={value.standard}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
