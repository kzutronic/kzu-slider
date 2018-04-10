## Description

An image - video ( youtube ) slider component for React.js  
KzuSlider is a responsive and lightweight infinite slider - carousel component for React.

## Demo

See Demo: <a href="http://kzu-slider-demo.s3-website-us-east-1.amazonaws.com/" target="_blank">Here</a>

## Installation

`npm i kzu-slider`

## Usage

```
import KzuSlider from "kzu-slider";

<KzuSlider
  slides={[
    {
      // simple image slide
      background: "imageUrl.jpeg",
      title: "Slide Title",
      subtitle: "Slide Subtitle",
      content: "Slide text content ...",
      buttons: [
        {
          title: "Single Button",
          onClick: () => {
            alert("Clicked Single Button");
          },
          color: "rgba(0,0,055,0.5)",
          textColor: "#ffffff"
        }
      ],
      contentColor: "#323232",
      contentBg: "rgba(255,255,255,0.6)",
      shades: [
        {
          from: "rgba(0, 100, 200, 0.5)",
          to: "rgba(122,234,189,0.5)",
          angle: 90
        }
      ]
    },
    {
      //youtube background
      youtubeKey: "jHbLGYBwiuo",
      //mute: false,
      videoSize: 210,
      title: "Youtube Background",
      content: "Video Background is used with zoom and shades.",
      shades: [
        {
          from: "rgba(255, 0, 255, 0.5)",
          to: "rgba(255, 255, 255, 0.5)",
          angle: 45
        }
      ]
    }
  ]}
/>
```

## Slider Props

All props are optional, if not specified, default values will be applied.

**height**, can be "full" (string) or a number {500} representing height in px (default height is 500px ).  
**parallax**, _boolean_ fixed background images.  
**auto** , _boolean_ slider runs automatically, stops on mouse hover.  
**duration**, _number_ representing slide duration in ms (default is 6000).  
**contentPadding**, _object_ as: { left: 80, right: 80, top: 64, bottom: 64 } defines padding of the box containing text contents. ( top and bottom paddings will make the box bigger whereas left - right padding will not effect width ).  
**contentWidth**, _number_ ( like 75 ) representing width in % of the box containing text contents ( title, subtitle, content and buttons ).  
**hideArrows**, _boolean_ hides navigation arrows.  
**hideDots**, _boolean_ hides navigation dots.  
**transition**, _number_ representing transition duration in ms (default is 1000).  
**slides**, _array of objects_ containing information on all slides.

## Slide properties

**background**, _string_ image Url.  
**title**, _string_ Slide Title.  
**subtitle**, _string_ Slide Subtitle.  
**content**, _string_ Slide Text Content.  
**buttons**, _array of objects_ Example:

```
[
  {
    title: "Single Button",
    onClick: () => {
      alert("Clicked Single Button");
    },
    color: "rgba(0,0,055,0.5)",
    textColor: "#ffffff"
  }
]
```

**contentColor**, _string_ color value like "#ffffff" or "rgba(255,255,255,0.5)" representing text color.  
**contentBg**, _string_ color value like "#ffffff" or "rgba(255,255,255,0.5)" representing text background box color.  
**shades**, _array of objects_ representing linear gradients over background image or video, Example:

```
 [
  {
    from: "rgba(0, 100, 200, 0.5)",
    to: "rgba(122,234,189,0.5)",
    angle: 90
  }
]
```

**youtubeKey**, _string_ youtube key in the url of youtube video.  
**mute**, _boolean_ by default video is muted, enter false to get sound.  
**videoSize**, _number_ a number bigger than 100 ( as % ) to make the video bigger in size.

## Author

Murat Yılmaz (kzutronic)

## Licence

kzu-slider is licenced under MIT Licence
