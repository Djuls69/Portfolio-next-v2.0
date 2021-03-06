import React from 'react'
import { makeStyles } from '@material-ui/core'
import { LinkedinLogo, GithubLogo, TwitterLogo } from '../../components/socialLogosSVG/SocialLogosSvg'

const useStyles = makeStyles(theme => ({
  socialMedias: {
    width: '4rem',
    position: 'fixed',
    left: '4rem',
    bottom: 0,
    '&::after': {
      display: 'block',
      content: '""',
      height: '10rem',
      width: 1,
      backgroundColor: '#eee',
      margin: '0 auto'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  socialLink: {
    display: 'block',
    '&:last-child': {
      marginBottom: '2rem'
    }
  },
  socialIcon: {
    padding: '1rem',
    height: '3.8rem',
    width: '3.8rem',
    fill: '#eee',
    transition: 'all 0.1s cubic-bezier(.89,.88,.31,.31)',
    '&:hover': {
      fill: '#3fc1c9',
      transform: 'translateY(-3px)'
    }
  }
}))

const SocialMedias = () => {
  const classes = useStyles()
  return (
    <div className={classes.socialMedias}>
      <a className={classes.socialLink} href='https://github.com/Djuls69' target='_blank' rel='noopener noreferrer'>
        <GithubLogo className={classes.socialIcon} />
      </a>
      <a
        className={classes.socialLink}
        href='https://www.linkedin.com/in/julien-delusseau-06b795130'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LinkedinLogo className={classes.socialIcon} />
      </a>
      <a className={classes.socialLink} href='https://twitter.com/Falk3D' target='_blank' rel='noopener noreferrer'>
        <TwitterLogo className={classes.socialIcon} />
      </a>
    </div>
  )
}

export default SocialMedias
