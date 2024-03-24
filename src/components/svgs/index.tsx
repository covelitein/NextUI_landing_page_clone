"use client"

export function TabUI({ defaultColor, activeColor, isActive } : any) {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="data-[auto=true]:sm:hidden block text-foreground text-default-400 group-data-[selected=true]:text-primary" fill="currentColor" height="44" viewBox="0 0 43 43" width="44"><path d="M32 43H11a10.928 10.928 0 01-7.778-3.222A10.928 10.928 0 010 32V11a10.928 10.928 0 013.222-7.778A10.928 10.928 0 0111 0h21a10.929 10.929 0 017.779 3.222A10.927 10.927 0 0143 11v21a10.927 10.927 0 01-3.222 7.778A10.929 10.929 0 0132 43zM11.314 12.293v12.033a6.35 6.35 0 00.87 3.31 6.243 6.243 0 002.422 2.3 7.458 7.458 0 003.595.843 7.474 7.474 0 003.6-.839 6.2 6.2 0 002.418-2.3 6.381 6.381 0 00.869-3.315V12.292h-1.659V24.21a5.149 5.149 0 01-.643 2.578 4.6 4.6 0 01-1.824 1.779 5.668 5.668 0 01-2.759.648 5.646 5.646 0 01-2.756-.648 4.64 4.64 0 01-1.823-1.779 5.116 5.116 0 01-.648-2.578V12.292zm18.6 0v18.175h1.66V12.293z" fill={`${isActive ? activeColor : defaultColor}`}></path></svg>
  )
}

export function TabModern({ defaultColor, activeColor, isActive } : any) {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" focusable="false" height="44" role="presentation" viewBox="0 0 24 24" width="44" className="group-data-[selected=true]:text-secondary"><g fill="none" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5px"><path d="M10 4.5V18a4.007 4.007 0 01-1.14 2.79l-.04.04a3.149 3.149 0 01-.28.25 3.5 3.5 0 01-.99.6c-.11.05-.22.09-.33.13A3.888 3.888 0 016 22a4.255 4.255 0 01-.8-.08c-.13-.03-.26-.06-.39-.1a3.611 3.611 0 01-.46-.17c0-.01 0-.01-.01 0a5.042 5.042 0 01-.8-.49l-.01-.01a2.744 2.744 0 01-.36-.32c-.11-.12-.22-.24-.33-.37a5.042 5.042 0 01-.49-.8c.01-.01.01-.01 0-.01a.031.031 0 00-.01-.02c-.06-.14-.11-.29-.16-.44-.04-.13-.07-.26-.1-.39A4.255 4.255 0 012 18V4.5A2.362 2.362 0 014.5 2h3A2.362 2.362 0 0110 4.5z" stroke={`${isActive ? activeColor : defaultColor}`} fill="none" strokeWidth="1.5px"></path><path d="M22 16.5v3a2.362 2.362 0 01-2.5 2.5H6a3.888 3.888 0 001.22-.19c.11-.04.22-.08.33-.13a3.5 3.5 0 00.99-.6 3.149 3.149 0 00.28-.25l.04-.04 6.8-6.79h3.84a2.362 2.362 0 012.5 2.5zM4.81 21.82a3.835 3.835 0 01-1.64-.99 3.835 3.835 0 01-.99-1.64 4.02 4.02 0 002.63 2.63z" stroke={`${isActive ? activeColor : defaultColor}`} fill="none" strokeWidth="1.5px"></path><path d="M18.37 11.29L15.66 14l-6.8 6.79A4.007 4.007 0 0010 18V8.335l2.71-2.705a2.368 2.368 0 013.54 0l2.12 2.12a2.368 2.368 0 010 3.54zM7 18a1 1 0 11-1-1 1 1 0 011 1z" stroke={`${isActive ? activeColor : defaultColor}`} fill="none" strokeWidth="1.5px"></path></g></svg>
  )
}

export function TabElegant({ defaultColor, activeColor, isActive } : any) {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" focusable="false" height="44" role="presentation" viewBox="0 0 24 24" width="44"><path d="M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3ZM18.01 8.99l-3-3" stroke={`${isActive ? activeColor : defaultColor}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5px" fill="none"></path><path d="M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44ZM4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44ZM19.5 13.44 21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13l1.5.44Z" stroke={`${isActive ? activeColor : defaultColor}`} strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg>
  )
}

export function TabRetro({ defaultColor, activeColor, isActive } : any) {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" focusable="false" height="44" role="presentation" viewBox="0 0 24 24" width="44" className="group-data-[selected=true]:text-warning"><path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke={`${isActive ? activeColor : defaultColor}`} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5px" fill="none"></path><path d="M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75ZM10.3 15.28 8 17.58M8.03 15.31l2.3 2.3" stroke={`${isActive ? activeColor : defaultColor}`} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5px" fill="none"></path><path d="M16.49 15.33h.02M14.49 17.5v-.02" stroke={`${isActive ? activeColor : defaultColor}`}  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2px" fill="none"></path></svg>
  )
}

export const HeartIcon = ({
  size = 24,
  width,
  height,
  strokeWidth = 1.5,
  fill = "none",
  ...props
} : any) => (
  <svg
    aria-hidden="true"
    fill={fill}
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const PauseCircleIcon = ({size = 24, width, height, ...props} : any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM10.7188 15.03C10.7188 15.51 10.5188 15.7 10.0087 15.7H8.70875C8.19875 15.7 7.99875 15.51 7.99875 15.03V8.97C7.99875 8.49 8.19875 8.3 8.70875 8.3H9.99875C10.5087 8.3 10.7087 8.49 10.7087 8.97V15.03H10.7188ZM15.9987 15.03C15.9987 15.51 15.7987 15.7 15.2887 15.7H13.9987C13.4887 15.7 13.2887 15.51 13.2887 15.03V8.97C13.2887 8.49 13.4887 8.3 13.9987 8.3H15.2887C15.7987 8.3 15.9987 8.49 15.9987 8.97V15.03Z"
      fill="currentColor"
    />
  </svg>
);

export const NextIcon = ({size = 24, width, height, ...props} : any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M3.76172 7.21957V16.7896C3.76172 18.7496 5.89172 19.9796 7.59172 18.9996L11.7417 16.6096L15.8917 14.2096C17.5917 13.2296 17.5917 10.7796 15.8917 9.79957L11.7417 7.39957L7.59172 5.00957C5.89172 4.02957 3.76172 5.24957 3.76172 7.21957Z"
      fill="currentColor"
    />
    <path
      d="M20.2383 18.9303C19.8283 18.9303 19.4883 18.5903 19.4883 18.1803V5.82031C19.4883 5.41031 19.8283 5.07031 20.2383 5.07031C20.6483 5.07031 20.9883 5.41031 20.9883 5.82031V18.1803C20.9883 18.5903 20.6583 18.9303 20.2383 18.9303Z"
      fill="currentColor"
    />
  </svg>
);

export const PreviousIcon = ({size = 24, width, height, ...props} : any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M20.2409 7.21957V16.7896C20.2409 18.7496 18.1109 19.9796 16.4109 18.9996L12.2609 16.6096L8.11094 14.2096C6.41094 13.2296 6.41094 10.7796 8.11094 9.79957L12.2609 7.39957L16.4109 5.00957C18.1109 4.02957 20.2409 5.24957 20.2409 7.21957Z"
      fill="currentColor"
    />
    <path
      d="M3.76172 18.9303C3.35172 18.9303 3.01172 18.5903 3.01172 18.1803V5.82031C3.01172 5.41031 3.35172 5.07031 3.76172 5.07031C4.17172 5.07031 4.51172 5.41031 4.51172 5.82031V18.1803C4.51172 18.5903 4.17172 18.9303 3.76172 18.9303Z"
      fill="currentColor"
    />
  </svg>
);

export const RepeatOneIcon = ({size = 24, width, height, ...props} : any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M3.91 17.1814C3.72 17.1814 3.53 17.1114 3.38 16.9614C2.01 15.5814 1.25 13.7614 1.25 11.8314C1.25 7.82139 4.5 4.56139 8.5 4.56139L14.57 4.58139L13.48 3.54139C13.18 3.25139 13.17 2.78139 13.46 2.48139C13.75 2.18139 14.22 2.17139 14.52 2.46139L16.96 4.80139C17.18 5.01139 17.25 5.34139 17.14 5.62139C17.03 5.90139 16.75 6.09139 16.44 6.09139L8.5 6.07139C5.33 6.07139 2.75 8.66139 2.75 11.8414C2.75 13.3714 3.35 14.8214 4.44 15.9114C4.73 16.2014 4.73 16.6814 4.44 16.9714C4.29 17.1114 4.1 17.1814 3.91 17.1814Z"
      fill="currentColor"
    />
    <path
      d="M9.9999 21.75C9.8099 21.75 9.6299 21.68 9.4799 21.54L7.0399 19.2C6.8199 18.99 6.7499 18.66 6.8599 18.38C6.9799 18.1 7.2599 17.95 7.5599 17.91L15.5099 17.93C18.6799 17.93 21.2599 15.34 21.2599 12.16C21.2599 10.63 20.6599 9.18 19.5699 8.09C19.2799 7.8 19.2799 7.32 19.5699 7.03C19.8599 6.74 20.3399 6.74 20.6299 7.03C21.9999 8.41 22.7599 10.23 22.7599 12.16C22.7599 16.17 19.5099 19.43 15.5099 19.43L9.4399 19.41L10.5299 20.45C10.8299 20.74 10.8399 21.21 10.5499 21.51C10.3899 21.67 10.1999 21.75 9.9999 21.75Z"
      fill="currentColor"
    />
    <path
      d="M12.2485 15.4191C11.8385 15.4191 11.4985 15.0791 11.4985 14.6691V11.2791L11.3085 11.4891C11.0285 11.7991 10.5585 11.8191 10.2485 11.5491C9.93853 11.2791 9.91853 10.7991 10.1885 10.4891L11.6885 8.81909C11.8985 8.58909 12.2285 8.50909 12.5185 8.61909C12.8085 8.73909 12.9985 9.00909 12.9985 9.32909V14.6791C12.9985 15.0891 12.6585 15.4191 12.2485 15.4191Z"
      fill="currentColor"
    />
  </svg>
);

export const ShuffleIcon = ({size = 24, width, height, ...props} : any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.7507 17.9809C21.7507 17.9609 21.7407 17.9409 21.7407 17.9209C21.7307 17.8409 21.7207 17.7609 21.6907 17.6909C21.6507 17.6009 21.6007 17.5309 21.5407 17.4609C21.5407 17.4609 21.5407 17.4509 21.5307 17.4509C21.4607 17.3809 21.3807 17.3309 21.2907 17.2909C21.2007 17.2509 21.1007 17.2309 21.0007 17.2309L16.3307 17.2509C16.3307 17.2509 16.3307 17.2509 16.3207 17.2509C15.7207 17.2509 15.1407 16.9709 14.7807 16.4909L13.5607 14.9209C13.3107 14.5909 12.8407 14.5309 12.5107 14.7909C12.1807 15.0509 12.1207 15.5109 12.3807 15.8409L13.6007 17.4109C14.2507 18.2509 15.2707 18.7509 16.3307 18.7509H16.3407L19.1907 18.7409L18.4807 19.4509C18.1907 19.7409 18.1907 20.2209 18.4807 20.5109C18.6307 20.6609 18.8207 20.7309 19.0107 20.7309C19.2007 20.7309 19.3907 20.6609 19.5407 20.5109L21.5407 18.5109C21.6107 18.4409 21.6607 18.3609 21.7007 18.2709C21.7307 18.1709 21.7507 18.0709 21.7507 17.9809Z"
      fill="currentColor"
    />
    <path
      d="M8.42 6.69172C7.77 5.79172 6.73 5.26172 5.62 5.26172C5.61 5.26172 5.61 5.26172 5.6 5.26172L3 5.27172C2.59 5.27172 2.25 5.61172 2.25 6.02172C2.25 6.43172 2.59 6.77172 3 6.77172L5.61 6.76172H5.62C6.25 6.76172 6.84 7.06172 7.2 7.57172L8.28 9.07172C8.43 9.27172 8.66 9.38172 8.89 9.38172C9.04 9.38172 9.2 9.33172 9.33 9.24172C9.67 8.99172 9.74 8.52172 9.5 8.19172L8.42 6.69172Z"
      fill="currentColor"
    />
    <path
      d="M21.74 6.07875C21.74 6.05875 21.75 6.03875 21.75 6.02875C21.75 5.92875 21.73 5.82875 21.69 5.73875C21.65 5.64875 21.6 5.56875 21.53 5.49875L19.53 3.49875C19.24 3.20875 18.76 3.20875 18.47 3.49875C18.18 3.78875 18.18 4.26875 18.47 4.55875L19.18 5.26875L16.45 5.25875C16.44 5.25875 16.44 5.25875 16.43 5.25875C15.28 5.25875 14.2 5.82875 13.56 6.79875L7.17 16.3787C6.81 16.9187 6.2 17.2487 5.55 17.2487H5.54L3 17.2287C2.59 17.2287 2.25 17.5587 2.25 17.9787C2.25 18.3887 2.58 18.7287 3 18.7287L5.55 18.7387C5.56 18.7387 5.56 18.7387 5.57 18.7387C6.73 18.7387 7.8 18.1688 8.44 17.1988L14.83 7.61875C15.19 7.07875 15.8 6.74875 16.45 6.74875H16.46L21 6.76875C21.1 6.76875 21.19 6.74875 21.29 6.70875C21.38 6.66875 21.46 6.61875 21.53 6.54875C21.53 6.54875 21.53 6.53875 21.54 6.53875C21.6 6.46875 21.66 6.39875 21.69 6.30875C21.72 6.23875 21.73 6.15875 21.74 6.07875Z"
      fill="currentColor"
    />
  </svg>
);
