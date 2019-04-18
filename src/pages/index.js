import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`william`, `dunk`, `coding`, `cycling`]} />
    <Image />
    <p>Hi I'm Will,</p>
    <p>
      I'm looking for my first software engineering{" "}
      <span role="img" aria-label="technologist emoji">
        👨‍💻
      </span>{" "}
      role.
    </p>
    <p>
      At the start of 2019 I jumped into an intensive 3 months at{" "}
      <a href="https://makers.tech/">Makers Academy</a> to skill up as a junior
      dev. Best coding practices baked in{" "}
      <span role="img" aria-label="cake slice emoji">
        🍰
      </span>{" "}
      (TDD{" "}
      <span role="img" aria-label="nerd and test tube emoji">
        🤓🧪
      </span>
      etc).
    </p>
    <p>
      So far I like JavaScript the best, we used it to build{" "}
      <a href="https://github.com/nomats/peakPose">PeakPose</a> a web
      application that helps yogi's{" "}
      <span role="img" aria-label="yogi emoji">
        🧘
      </span>{" "}
      improve their pose.
    </p>
    <p>
      I also like <a href="https://www.strava.com/athletes/wpdunk">bikes</a>{" "}
      <span role="img" aria-label="cyclist emoji">
        🚴
      </span>{" "}
      <a href="https://vimeo.com/317470522">alot</a>. More{" "}
      <a href="https://www.instagram.com/wpdunk/">photo evidence</a>. And my{" "}
      <a href="https://github.com/wpdunk/CV">GitHub</a>{" "}
      <span role="img" aria-label="invader emoji">
        👾
      </span>
      .
    </p>
    <p>
      <a href="https://github.com/wpdunk/CV">Check out my CV</a> or{" "}
      <a href="mailto:williamdunk@gmail.com" class="mail">
        Say hi!
      </a>
    </p>

    <p />
  </Layout>
)

export default IndexPage
