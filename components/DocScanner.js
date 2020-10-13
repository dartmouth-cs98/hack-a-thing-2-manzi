import React, { Component } from "react";
import { View, Image } from "react-native";

/*
<DocumentScanner
          useBase64
          saveInAppDocument={false}
          onPictureTaken={data =>
            this.setState({
              image: data.croppedImage,
              initialImage: data.initialImage,
              rectangleCoordinates: data.rectangleCoordinates
            })
          }
          overlayColor="rgba(255,130,0, 0.7)"
          enableTorch={false}
          brightness={0.3}
          saturation={1}
          contrast={1.1}
          quality={0.5}
          onRectangleDetect={({ stableCounter, lastDetectionType }) =>
            this.setState({ stableCounter, lastDetectionType })
          }
          detectionCountBeforeCapture={5}
          detectionRefreshRateInMS={50}
          onPermissionsDenied={() => console.log("Permissions Denied")}
        />
        <Image
          source={{ uri: `data:image/jpeg;base64,${this.props.image}` }}
          resizeMode="contain"
        />
*/

class DocScanner extends Component {
  render() {
    return (
      <View>
        k
      </View>
    );
  }
}

export default DocScanner;