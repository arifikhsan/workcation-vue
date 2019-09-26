module.exports = {
  theme: {
    extend: {},
    customForms: theme => ({
      // borderColor: 'transparent',
      // backgroundColor: theme('colors.gray.700'),
      default: {
        input: {},
        select: {
          borderRadius: theme('borderRadius.lg'),
          // boxShadow: theme('boxShadow.default')
          backgroundColor: theme('colors.gray.700'),
          borderColor: 'transparent',
          iconColor: theme('colors.white'),
          lineHeight: theme('lineHeight.snug'),
          '&:focus': {
            boxShadow: 'none',
            borderColor: 'transparent'
          }
        },
        'radio, checkbox': {
          width: '1.5em',
          height: '1.5em',
          color: theme('colors.indigo.600'),
          borderColor: 'transparent',
          backgroundColor: theme('colors.gray.900')
        }
      }
    })
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
};
