import React from 'react'
import { Flex, Box } from '@rebass/grid'

import Footer from './Footer'
import FooterSection from './FooterSection'
import LegalSection from './LegalSection'
import Link from './LinkFooterStyled'

const PageFooter = props => (
  <Footer>
    <FooterSection>
      <p>&copy; Dr. Ulrich Anders</p>
      <div>
        <p>
          Revision: {props.date}
          <br />
          Browser: {props.browser.name} {props.browser.version}
        </p>
      </div>
    </FooterSection>
    <LegalSection>
      <Box>
        <Link to="/imprint">Imprint</Link>
        {' · '}
        <Link to="/data-protection">Data protection</Link>
      </Box>
    </LegalSection>
  </Footer>
)

export default PageFooter
