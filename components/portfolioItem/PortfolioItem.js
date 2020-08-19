import React from 'react'
import { ExternalLinkIcon } from '../svg/SvgComponents'
import { GithubLogo } from '../socialLogosSVG/SocialLogosSvg'
import { portfolioItemStyles } from './PortfolioItemStyles'
import { useTheme, useMediaQuery } from '@material-ui/core'

const PortfolioItem = ({ item }) => {
  const { id, tags, titre, img, description, link, github } = item
  const classes = portfolioItemStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div
      style={{ flexDirection: !matches && id % 2 !== 0 ? 'row' : 'row-reverse' }}
      className={classes.projectContainer}
    >
      <div className={classes.projectImage}>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <img src={img} alt={`${titre} Projet`} />
          <div className={classes.projectOverlay} />
        </a>
      </div>
      <div
        style={{ alignItems: !matches && id % 2 !== 0 ? 'flex-end' : 'flex-start' }}
        className={classes.projectContent}
      >
        <h2>A propos du projet</h2>
        <h1>{titre}</h1>
        <div className={classes.projectDescription}>{description}</div>
        <ul className={classes.projectTechnos}>
          {tags.map((techno, idx) => (
            <li key={idx}>{techno}</li>
          ))}
        </ul>
        <div>
          <a className={classes.projectLinks} href={github} target='_blank' rel='noopener noreferrer'>
            <GithubLogo />
          </a>
          <a className={classes.projectLinks} href={link} target='_blank' rel='noopener noreferrer'>
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
