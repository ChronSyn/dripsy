import React from 'react'
import { createMedia } from '@artsy/fresnel'
import { defaultBreakpoints } from '../css/breakpoints'

const {
  MediaContextProvider,
  Media: SSRMediaQuery,
  createMediaStyle,
} = createMedia({
  breakpoints: {
    // temporary breakpoints for testing fresnel, will update this logic once it works
    // TODO turn this into a function you use when you first create the app
    // here, you'll be able to define your own breakpoints maybe?
    '0': 0,
    '1': defaultBreakpoints[0],
    '2': defaultBreakpoints[1],
    '3': defaultBreakpoints[2],
    '4': defaultBreakpoints[3],
  },
})

const ssrStyleReset = createMediaStyle()

const SSRStyleReset = () => (
  <style type="text/css" dangerouslySetInnerHTML={{ __html: ssrStyleReset }} />
)

export { SSRMediaQuery, SSRStyleReset, ssrStyleReset, MediaContextProvider }
