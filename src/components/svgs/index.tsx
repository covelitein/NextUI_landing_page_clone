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