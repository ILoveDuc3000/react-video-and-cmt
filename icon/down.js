import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={30}
      height={34}
      viewBox="0 0 85 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.63 25.43a3.509 3.509 0 014.95.33L42.502 50.81l21.92-25.052a3.509 3.509 0 015.282 4.621L46.462 56.941a5.263 5.263 0 01-7.922 0L15.3 30.381a3.509 3.509 0 01.33-4.952z"
        fill="#FF8600"
      />
    </Svg>
  )
}

export default SvgComponent
