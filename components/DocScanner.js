import React, { Component } from "react";
import { Text, Image } from "react-native";

import DocumentScanner from "@woonivers/react-native-document-scanner"

class DocScanner extends Component {
  render() {
    return (
      <View>
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
      </View>
    );
  }
}

// class DocScanner extends Component {
//   render() {

//     return (
//       <Image source={this.props}>
        
//       </Image>
//     );
//   }
// }

export default DocScanner;