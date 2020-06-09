class BadgeBuilder {
  public static supportsBlm({color1 = '#808080', color2 = '#c83737ff'} = {}) {
    return (`
<svg width="200" height="50" version="1.1" viewBox="0 0 52.917 13.229" xmlns="http://www.w3.org/2000/svg">
 <g transform="matrix(.93332 0 0 1 -14.144 -75.001)">
  <rect transform="scale(1,-1)" x="15.154" y="-88.229" width="35" height="13.229" fill="${color1}" fill-rule="evenodd" stroke-width=".040993"/>
  <rect transform="scale(1,-1)" x="50" y="-88.229" width="23" height="13.229" fill="${color2}" fill-rule="evenodd" stroke-width=".040993"/>
  <text transform="scale(1.0351 .96608)" x="17.428375" y="85.809212" fill="#ffffff" font-family="sans-serif" font-size="3.6516px" stroke-width=".27387" style="line-height:1.25" xml:space="preserve"><tspan x="17.428375" y="85.809212" fill="#ffffff" font-family="sans-serif" font-size="3.6516px" font-weight="bold" stroke="white" letter-spacing="1" stroke-width=".27387">SUPPORTS</tspan></text>
  <text transform="scale(1.0351 .96608)" x="53" y="85.810997" fill="#ffffff" font-family="sans-serif" font-size="3.6516px" stroke-width=".27387" style="line-height:1.25" xml:space="preserve"><tspan x="54" y="85.810997" fill="#ffffff" font-family="sans-serif" font-size="3.6516px" font-weight="bold" stroke="white" letter-spacing="1" stroke-width=".27387">BLM</tspan></text>
 </g>
</svg>
  `)
  }

  public static blm({color='#00000'}) {
    return (`
    <svg width="200" height="50" version="1.1" viewBox="0 0 52.917 13.229" xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(.93332 0 0 1 -14.144 -75.001)">
        <rect transform="scale(1,-1)" x="15.154" y="-88.229" width="56.697" height="13.229" fill="${color}" fill-rule="evenodd" stroke-width=".057973"/>
        <text transform="scale(1.0351 .96608)" x="15" y="85.809212" style="fill:#ffffff;font-family:sans-serif;font-size:3.6516px;line-height:1.25;stroke-width:.27387" xml:space="preserve"><tspan x="18" y="85.809212" stroke="white" letter-spacing=".5" style="fill:#ffffff;font-family:sans-serif;font-size:3.6516px;font-weight:bold;stroke-width:.27387">BLACK LIVES MATTER</tspan></text>
      </g>
    </svg>
`)
  }

  public static weLoveBlm() {
    return (`
    <svg width="200" height="50" version="1.1" viewBox="0 0 52.917 13.229" xmlns="http://www.w3.org/2000/svg">
     <g transform="matrix(.93332 0 0 1 -14.144 -75.001)">
      <rect transform="scale(1,-1)" x="15.154" y="-88.229" width="56.697" height="13.229" fill="#808080" fill-rule="evenodd" stroke-width=".057973" style="fill:#000"/>
<text transform="scale(1.0351 .96608)" x="17.428375" y="85.809212" fill="#ffffff" font-family="sans-serif" font-size="3.6516px" stroke-width=".27387" style="line-height:1.25" xml:space="preserve"><tspan x="22" y="85.809212" fill="#ffffff" font-family="sans-serif" font-size="3.6516px" font-weight="bold" stroke="white" letter-spacing="1" stroke-width=".27387">WE</tspan></text>
      <path d="m45.635 76.764-2.6936 1.8674-2.6936-1.8674-2.6936 2.3342v3.2679l5.3871 4.6684 5.3871-4.6684v-3.2679z" style="fill:#fff;stroke-width:.4578"/>
      <text transform="scale(1.0351 .96608)" x="17.428375" y="85.809212" fill="#ffffff" font-family="sans-serif" font-size="3.6516px" stroke-width=".27387" style="line-height:1.25" xml:space="preserve"><tspan x="53" y="85.809212" fill="#ffffff" font-family="sans-serif" font-size="3.6516px" font-weight="bold" stroke="white" letter-spacing="1" stroke-width=".27387">BLM</tspan></text>
     </g>
    </svg>
    `)
  }
}

export default BadgeBuilder;
