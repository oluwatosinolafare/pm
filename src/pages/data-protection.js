import React from "react"
import { Box } from "@rebass/grid"
import Container from "../components/Container"
import Section from "../components-styled/Section"
import Layout from "../components/Layout"

const DataProtectionPage = () => (
  <Layout>
    <Container>
      <Section>
        <h2>Data Protection</h2>
        <h3>This site</h3>
        <p>
          We consider data protection to be very important. Therefore, the use
          of this website is possible without offering person-related
          information.
        </p>
        <p>
          This site is a personal and non-commercial website organized and
          maintained by Dr. Ulrich Anders for the purpose of teaching at{" "}
          <a href="https://cbs.de/" target="_blank">
            Cologne Business School
          </a>
          . As such this site has no intention to gather and process any
          person-related data. Therefore this site in itself does not use Google
          analytics, trackers, advertising or marketing hooks.
        </p>
        <p>
          Furthermore, this site does not offer newsletters or contact forms and
          the owner of this site does not store any person-related information
          in connection to this site.
        </p>
        <h3>Hosting and internet provider</h3>
        <p>
          However, like all other websites this site is hosted by an internet
          provider. In the case of this site the internet provider is{" "}
          <a href="https://netlify.com" target="_blank">
            netlify.com
          </a>
          . Netlify is using common internet technologies, such as cookies and
          web server logs for monitoring access to this website.
        </p>
        <p>
          Most internet providers are generating log files that usually contain
          the visitor’s browser type, language preference, referring site,
          additional websites requested, the date and time of each visitor
          request and potentially personally-identifying information like
          Internet Protocol (IP) addresses.
        </p>
        <p>
          The reason for doing so is to better understand how visitors use the
          website, and to monitor and protect the security of the website.
        </p>
        <p>
          Please read more about{" "}
          <a href="https://www.netlify.com/privacy/">
            Netlify's privacy statement
          </a>{" "}
          in order to find out about their approach to protecting data.
        </p>
        <h3>Do not track</h3>
        <p>
          In general, you can prevent the analysis of user behavior by blocking
          the use of cookies in your browser, for example by make an exception
          in the browser (such as Firefox browser). Please look in the program
          help for how this can be set up in your browser.
        </p>
        <p>
          Of course, you can also on occasion, in individual cases or
          periodically delete cookies in your browser to clear tracking
          information. If you have activated the so-called Do-Not-Track function
          ("DNT") in your browser, then your visit to websites will not
          automatically be recorded by web analysis tools. However, this does
          not work with every browser. To enable DNT in your browser, please
          check your browser's help function if you do not know how to activate
          it.
        </p>
        <h3>Changes to the privacy policy</h3>
        <p>
          We reserve the right to change this privacy policy. The current
          version of the privacy policy is available at{" "}
          <a href="http://projectmanagement.netlify.com/data-protection">
            http://projectmanagement.netlify.com/data-protection
          </a>
          .
        </p>
        <h3>Do not track</h3>
        <p>
          In general, you can prevent the analysis of user behavior by blocking
          the use of cookies in your browser, for example by make an exception
          in the browser (such as Firefox browser). Please look in the program
          help for how this can be set up in your browser.
        </p>
        <p>
          Of course, you can also on occasion, in individual cases or
          periodically delete cookies in your browser to clear tracking
          information. If you have activated the so-called Do-Not-Track function
          ("DNT") in your browser, then your visit to websites will not
          automatically be recorded by web analysis tools. However, this does
          not work with every browser. To enable DNT in your browser, please
          check your browser's help function if you do not know how to activate
          it.
        </p>
        <h3>Changes to the privacy policy</h3>
        <p>
          We reserve the right to change this privacy policy. The current
          version of the privacy policy is available at{" "}
          <a href="http://projectmanagement.netlify.com/data-protection">
            http://projectmanagement.netlify.com/data-protection
          </a>
          .
        </p>
        <h3>Inquires</h3>
        <p>
          All inquires concerning the data protection for this website can be
          addressed to:
        </p>
        <p>
          Dr. Ulrich Anders
          <br />
          Cologne Business School
          <br />
          Hardefuststr. 1<br />
          D-50677 Köln
          <br />
          u.anders@cbs.de
        </p>
      </Section>
    </Container>
  </Layout>
)

export default DataProtectionPage
