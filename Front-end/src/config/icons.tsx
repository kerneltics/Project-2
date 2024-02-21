import { LucideProps } from "lucide-react";

import { cn } from "@/lib/utils";

export const Icons = {
  textLogo: ({ className = "", ...props }: LucideProps) => (
    <svg
      width="157"
      height="70"
      viewBox="0 0 157 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("md:size-[120px]", className)}
      {...props}
    >
      <g clipPath="url(#clip0_366_876)">
        <path
          d="M152.515 69.9999H157.001V39.3001L156.92 39.2377L142.804 28.1901L138.318 24.6797V70.0013H142.804M142.804 65.6789V33.8534L152.515 41.4544V65.6789H142.804Z"
          fill="#073762"
        />
        <path
          d="M132.869 0V70H98.0977V46.1684L102.584 42.6579L117.147 31.2592V36.9211L102.584 48.3212V65.5568H128.383V9.17371L117.156 17.9629V27.0728L112.67 30.5832V15.81L117.156 12.2996L128.383 3.5118L132.869 0Z"
          fill="#073762"
        />
        <path
          d="M119.46 50.0728H116.492V53.0127H119.46V50.0728Z"
          fill="#FBB040"
        />
        <path
          d="M114.472 50.0728H111.504V53.0127H114.472V50.0728Z"
          fill="#FBB040"
        />
        <path
          d="M119.46 54.8506H116.492V57.7905H119.46V54.8506Z"
          fill="#FBB040"
        />
        <path
          d="M114.472 54.8506H111.504V57.7905H114.472V54.8506Z"
          fill="#FBB040"
        />
      </g>
      <path
        d="M11.1051 45.94C13.8304 45.94 15.9304 47.0227 17.4051 49.188C18.5624 50.8867 19.1411 52.94 19.1411 55.348C19.1411 58.1107 18.3851 60.3227 16.8731 61.984C15.4357 63.552 13.5131 64.336 11.1051 64.336C8.3424 64.336 6.2424 63.328 4.80507 61.312C3.64773 59.7253 3.06907 57.7373 3.06907 55.348C3.06907 52.548 3.82507 50.2613 5.33707 48.488C6.7744 46.7893 8.69707 45.94 11.1051 45.94ZM11.1051 61.256C12.4491 61.256 13.4851 60.752 14.2131 59.744C14.9411 58.7173 15.3051 57.252 15.3051 55.348C15.3051 53.3133 14.9037 51.7267 14.1011 50.588C13.3544 49.58 12.3557 49.076 11.1051 49.076C9.76107 49.076 8.71573 49.6267 7.96907 50.728C7.24107 51.8293 6.87707 53.3693 6.87707 55.348C6.87707 59.2867 8.2864 61.256 11.1051 61.256ZM31.5534 54.368C30.6387 53.7707 29.5934 53.472 28.4174 53.472C27.5214 53.472 27.0734 53.8547 27.0734 54.62C27.0734 55.3293 27.68 55.8333 28.8934 56.132C30.4054 56.5053 31.432 56.9253 31.9734 57.392C32.7574 58.064 33.1494 59.072 33.1494 60.416C33.1494 61.6107 32.72 62.5627 31.8614 63.272C31.0214 63.9813 29.8827 64.336 28.4454 64.336C26.4107 64.336 24.6934 63.7573 23.2934 62.6L24.5814 60.64C25.552 61.4053 26.7187 61.788 28.0814 61.788C28.6227 61.788 29.0614 61.6573 29.3974 61.396C29.7334 61.1347 29.9014 60.7893 29.9014 60.36C29.9014 59.576 29.2387 59.0627 27.9134 58.82C25.076 58.2787 23.6574 56.8973 23.6574 54.676C23.6574 53.612 24.0867 52.7253 24.9454 52.016C25.8227 51.3067 26.9147 50.952 28.2214 50.952C29.9947 50.952 31.5347 51.4653 32.8414 52.492L31.5534 54.368ZM43.2845 50.952C45.3752 50.952 46.9992 51.6893 48.1565 53.164C49.1272 54.396 49.6125 55.8987 49.6125 57.672C49.6125 59.744 48.8938 61.424 47.4565 62.712C46.2618 63.7947 44.8712 64.336 43.2845 64.336C41.4365 64.336 39.8872 63.6453 38.6365 62.264C37.5165 61.0133 36.9565 59.4827 36.9565 57.672C36.9565 55.6187 37.5818 53.9573 38.8325 52.688C39.9712 51.5307 41.4552 50.952 43.2845 50.952ZM43.2845 61.704C45.0952 61.704 46.0005 60.36 46.0005 57.672C46.0005 54.872 45.0952 53.472 43.2845 53.472C41.4738 53.472 40.5685 54.872 40.5685 57.672C40.5685 60.36 41.4738 61.704 43.2845 61.704ZM62.8375 62.544C61.9041 63.7387 60.6255 64.336 59.0015 64.336C57.3961 64.336 56.2481 63.9253 55.5575 63.104C54.8855 62.264 54.5495 60.864 54.5495 58.904V51.288H58.0215V57.98C58.0215 59.2493 58.1895 60.1453 58.5255 60.668C58.8615 61.172 59.4401 61.424 60.2615 61.424C60.6161 61.424 61.0175 61.3307 61.4655 61.144C61.9135 60.9573 62.1841 60.7613 62.2775 60.556V51.288H65.8055V64H63.1735L62.8655 62.544H62.8375ZM75.1039 45.94V64H71.5759V47.788L75.1039 45.94Z"
        fill="#073762"
      />
      <path
        d="M18.8301 24.676C18.8301 27.0653 18.0088 28.988 16.3661 30.444C14.9101 31.7133 13.0808 32.348 10.8781 32.348C8.22746 32.348 6.17413 31.4707 4.71813 29.716C3.59813 28.372 3.03813 26.776 3.03813 24.928C3.03813 23.472 3.37413 22.184 4.04613 21.064L7.51813 20.28C6.75279 21.4933 6.37013 22.884 6.37013 24.452C6.37013 25.8333 6.77146 26.9253 7.57413 27.728C8.39546 28.5493 9.49679 28.96 10.8781 28.96C12.2408 28.96 13.3235 28.5773 14.1261 27.812C14.9288 27.0467 15.3301 26.0013 15.3301 24.676V10.816L18.8301 8.94V24.676ZM37.1598 23.612V27H33.7158C33.5852 28.68 32.8385 30.024 31.4758 31.032C30.3558 31.8533 29.0492 32.264 27.5558 32.264C26.3798 32.264 25.2318 31.9467 24.1118 31.312V28.26C25.1198 28.8387 26.1278 29.128 27.1358 29.128C27.9198 29.128 28.6105 28.9133 29.2078 28.484C29.8238 28.0547 30.1598 27.5413 30.2158 26.944C30.0665 26.9253 29.8332 26.9067 29.5158 26.888C29.1985 26.8507 28.9558 26.8227 28.7878 26.804C26.8652 26.5987 25.3812 25.8427 24.3358 24.536C23.4585 23.4347 23.0198 22.1 23.0198 20.532C23.0198 18.4787 23.5798 16.8547 24.6998 15.66C25.6892 14.6147 26.9958 14.092 28.6198 14.092C30.2812 14.092 31.5785 14.624 32.5118 15.688C33.3145 16.6027 33.7158 17.7973 33.7158 19.272V23.612H37.1598ZM30.2158 19.216C30.2158 17.984 29.6838 17.368 28.6198 17.368C27.2012 17.368 26.4918 18.3853 26.4918 20.42C26.4918 22.2307 27.3132 23.2387 28.9558 23.444C29.2172 23.5 29.6372 23.5467 30.2158 23.584V19.216ZM35.4842 27V23.612H40.4122V27H35.4842ZM48.1741 23.584C49.0701 20.8587 50.3768 18.6467 52.0941 16.948C53.9981 15.044 56.1821 14.092 58.6461 14.092C60.8488 14.092 62.6128 14.8573 63.9381 16.388C65.0581 17.676 65.6181 19.272 65.6181 21.176V21.792C65.6181 23.4907 65.0861 24.816 64.0221 25.768C63.1075 26.5893 61.9221 27 60.4661 27H48.3701C47.0075 27 45.8781 26.636 44.9821 25.908C44.0861 26.636 42.9568 27 41.5941 27H38.7381V23.612H41.2581C41.9675 23.612 42.4715 23.4627 42.7701 23.164C43.0688 22.8467 43.2181 22.324 43.2181 21.596V17.9L46.7461 16.052V21.596C46.7461 22.7907 47.2221 23.4533 48.1741 23.584ZM62.0901 21.568V21.176C62.0901 20.056 61.7728 19.1413 61.1381 18.432C60.5035 17.7227 59.6821 17.368 58.6741 17.368C57.2181 17.368 55.8555 17.928 54.5861 19.048C53.3355 20.168 52.3461 21.6893 51.6181 23.612H60.3261C60.9981 23.612 61.4555 23.472 61.6981 23.192C61.9595 22.8933 62.0901 22.352 62.0901 21.568ZM68.8974 7.372L69.7934 5.748H70.6334C70.4281 5.37467 70.3254 4.992 70.3254 4.6C70.3254 4.00267 70.5401 3.48933 70.9694 3.06C71.4174 2.63067 71.9494 2.416 72.5654 2.416C73.1254 2.416 73.6481 2.612 74.1334 3.004V4.628C73.6854 4.236 73.2374 4.04 72.7894 4.04C72.1734 4.04 71.8654 4.32 71.8654 4.88C71.8654 5.16 71.9867 5.44933 72.2294 5.748H75.0014L74.1054 7.372H68.8974ZM69.9614 27V10.816L73.4894 8.94V27H69.9614Z"
        fill="#073762"
      />
      <defs>
        <clipPath id="clip0_366_876">
          <rect
            width="58.9024"
            height="70"
            fill="white"
            transform="translate(98.0977)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  logo: ({ className = "", ...props }: LucideProps) => (
    <svg
      width="69"
      height="82"
      viewBox="0 0 69 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[70px]", className)}
      {...props}
    >
      <g clipPath="url(#clip0_188_404)">
        <path
          d="M63.745 82H69V46.0374L68.9048 45.9642L52.3698 33.0228L47.1147 28.9106V82.0016H52.3698M52.3698 76.9382V39.6569L63.745 48.561V76.9382H52.3698Z"
          fill="#3D3E7B"
        />
        <path
          d="M40.7318 0V82H0V54.0829L5.25503 49.9707L22.3154 36.6179V43.2504L5.25503 56.6049V76.7951H35.4768V10.7463L22.3253 21.0423V31.7138L17.0702 35.826V18.5203L22.3253 14.4081L35.4768 4.11382L40.7318 0Z"
          fill="#3D3E7B"
        />
        <path
          d="M25.0259 58.6569H21.5488V62.1008H25.0259V58.6569Z"
          fill="#FBB040"
        />
        <path
          d="M19.1814 58.6569H15.7043V62.1008H19.1814V58.6569Z"
          fill="#FBB040"
        />
        <path
          d="M25.0259 64.2537H21.5488V67.6976H25.0259V64.2537Z"
          fill="#FBB040"
        />
        <path
          d="M19.1814 64.2537H15.7043V67.6976H19.1814V64.2537Z"
          fill="#FBB040"
        />
      </g>
      <defs>
        <clipPath id="clip0_188_404">
          <rect width="69" height="82" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  whiteLogo: ({ className = "", ...props }: LucideProps) => (
    <svg
      width="69"
      height="82"
      viewBox="0 0 69 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[70px]", className)}
      {...props}
    >
      <g clipPath="url(#clip0_188_404)">
        <path
          d="M63.745 82H69V46.0374L68.9048 45.9642L52.3698 33.0228L47.1147 28.9106V82.0016H52.3698M52.3698 76.9382V39.6569L63.745 48.561V76.9382H52.3698Z"
          fill="#fff"
        />
        <path
          d="M40.7318 0V82H0V54.0829L5.25503 49.9707L22.3154 36.6179V43.2504L5.25503 56.6049V76.7951H35.4768V10.7463L22.3253 21.0423V31.7138L17.0702 35.826V18.5203L22.3253 14.4081L35.4768 4.11382L40.7318 0Z"
          fill="#fff"
        />
        <path
          d="M25.0259 58.6569H21.5488V62.1008H25.0259V58.6569Z"
          fill="#FBB040"
        />
        <path
          d="M19.1814 58.6569H15.7043V62.1008H19.1814V58.6569Z"
          fill="#FBB040"
        />
        <path
          d="M25.0259 64.2537H21.5488V67.6976H25.0259V64.2537Z"
          fill="#FBB040"
        />
        <path
          d="M19.1814 64.2537H15.7043V67.6976H19.1814V64.2537Z"
          fill="#FBB040"
        />
      </g>
      <defs>
        <clipPath id="clip0_188_404">
          <rect width="69" height="82" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  totalSoldRealEstate: ({ className = "", ...props }: LucideProps) => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="71.000000pt"
      height="70.000000pt"
      viewBox="0 0 71.000000 70.000000"
      preserveAspectRatio="xMidYMid meet"
      className={cn("size-[70px]", className)}
      {...props}
    >
      <g
        transform="translate(0.000000,70.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M265 652 c-82 -48 -104 -79 -66 -89 17 -4 21 -13 21 -48 0 -30 -5
-45 -16 -49 -8 -3 -12 -10 -9 -16 8 -13 312 -13 320 0 3 6 -1 13 -9 16 -11 4
-16 19 -16 49 0 34 4 44 20 48 29 7 25 32 -9 56 -37 27 -49 14 -14 -16 45 -36
5 -27 -66 17 l-64 39 -46 -26 c-25 -15 -55 -33 -66 -40 -22 -15 -49 -18 -41
-4 4 5 39 28 78 51 l72 41 37 -20 c41 -24 49 -25 49 -11 0 9 -71 50 -87 50 -4
0 -44 -21 -88 -48z m151 -53 c54 -30 54 -31 54 -80 0 -45 -2 -49 -24 -49 -23
0 -25 5 -28 48 l-3 47 -60 0 -60 0 -3 -47 c-3 -43 -5 -48 -28 -48 -22 0 -24 4
-24 49 0 49 0 50 53 80 28 17 56 31 61 31 5 0 33 -14 62 -31z m-16 -89 l0 -40
-45 0 -45 0 0 40 0 40 45 0 45 0 0 -40z"
        />
        <path
          d="M7 594 c-4 -4 -7 -56 -7 -115 0 -84 3 -111 16 -123 8 -9 16 -16 17
-16 1 0 1 35 -1 78 -7 147 -10 146 96 39 l94 -94 -41 -47 -40 -46 -36 31 c-20
18 -39 28 -43 24 -4 -4 11 -23 34 -44 57 -51 77 -86 64 -110 -11 -21 -4 -51
11 -51 5 0 14 -11 19 -25 6 -15 17 -25 29 -25 10 0 21 -7 25 -15 3 -8 12 -15
19 -15 8 0 20 -6 26 -14 18 -21 101 -29 120 -11 48 43 59 52 74 58 9 3 17 15
17 26 0 10 7 22 16 25 10 4 14 16 12 35 -2 21 7 41 30 70 36 44 39 53 17 45
-9 -4 -15 0 -15 8 0 8 -13 27 -30 43 -16 16 -30 34 -30 40 0 6 40 51 90 100
l90 90 0 -93 0 -93 -35 -30 c-33 -29 -44 -49 -27 -49 4 0 26 19 50 41 l42 41
0 107 c0 59 -3 111 -7 115 -4 4 -55 -41 -113 -99 -104 -104 -107 -106 -134
-94 -22 10 -47 10 -128 0 l-101 -12 -107 106 c-58 58 -109 103 -113 99z m487
-254 c49 -53 56 -81 30 -119 l-16 -23 -44 43 c-24 23 -41 46 -38 51 3 4 -3 11
-13 14 -10 3 -30 12 -45 20 -20 11 -42 13 -78 8 -46 -6 -50 -5 -50 14 0 17 8
22 48 27 26 3 54 8 62 9 8 2 34 4 56 5 37 1 46 -4 88 -49z m-63 -97 c74 -70
95 -103 67 -103 -7 0 -24 12 -40 27 -39 38 -48 20 -10 -20 56 -58 33 -81 -25
-25 -43 41 -53 30 -14 -15 36 -41 38 -47 11 -47 -14 0 -20 7 -20 23 0 22 -36
57 -85 82 -11 6 -25 21 -32 34 -18 37 -40 45 -70 25 -25 -16 -27 -16 -40 2
-18 24 -17 28 11 61 22 26 30 28 95 29 l72 1 80 -74z m-175 -34 c6 -11 -52
-79 -68 -79 -17 0 -7 35 19 62 29 30 38 34 49 17z m30 -50 c7 -12 -44 -69 -63
-69 -21 0 -15 22 14 52 29 30 38 34 49 17z m50 -30 c7 -12 -44 -69 -63 -69
-21 0 -15 22 14 52 29 30 38 34 49 17z m44 -42 c0 -23 -47 -60 -66 -53 -15 6
-14 10 11 36 30 32 55 39 55 17z m11 -60 c-13 -13 -26 -3 -16 12 3 6 11 8 17
5 6 -4 6 -10 -1 -17z"
        />
      </g>
    </svg>
  ),
  totalRentedRealEstate: ({ className = "", ...props }: LucideProps) => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="70.000000pt"
      height="70.000000pt"
      viewBox="0 0 70.000000 70.000000"
      preserveAspectRatio="xMidYMid meet"
      className={cn("size-[70px]", className)}
      {...props}
    >
      <g
        transform="translate(0.000000,70.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M121 686 c-8 -9 -11 -46 -9 -103 l3 -88 235 0 235 0 3 88 c2 57 -1
94 -9 103 -13 16 -99 19 -99 4 0 -5 20 -10 45 -10 l45 0 0 -85 0 -85 -220 0
-221 0 3 83 3 82 153 3 c204 3 203 22 -2 22 -119 0 -156 -3 -165 -14z"
        />
        <path
          d="M190 600 c0 -27 5 -50 10 -50 6 0 10 5 10 11 0 8 5 7 15 -1 20 -16
32 -5 16 14 -8 10 -9 16 -1 21 16 10 12 42 -6 49 -37 14 -44 7 -44 -44z m40
20 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z"
        />
        <path
          d="M287 643 c-4 -3 -7 -26 -7 -50 0 -39 2 -43 25 -43 14 0 25 5 25 10 0
6 -7 10 -15 10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 -7 10
-15 10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 5 15 10 0 11 -33 14 -43 3z"
        />
        <path
          d="M360 603 c0 -29 5 -53 10 -53 6 0 10 10 11 23 l0 22 16 -22 c24 -35
33 -28 33 28 0 31 -4 48 -10 44 -5 -3 -10 -16 -10 -28 0 -20 -2 -20 -25 8
l-24 30 -1 -52z"
        />
        <path
          d="M450 640 c0 -5 5 -10 10 -10 6 0 10 -18 10 -40 0 -22 5 -40 10 -40 6
0 10 18 10 40 0 22 5 40 10 40 6 0 10 5 10 10 0 6 -13 10 -30 10 -16 0 -30 -4
-30 -10z"
        />
        <path
          d="M113 424 c-7 -3 -13 -14 -13 -24 0 -10 -9 -20 -20 -23 -19 -5 -20
-14 -20 -120 0 -153 18 -165 22 -15 l3 113 110 0 110 0 3 -147 c1 -90 -1 -148
-7 -148 -5 0 -11 12 -13 28 l-3 27 -90 0 -90 0 -3 -28 c-4 -34 -22 -36 -22 -1
0 14 -4 23 -10 19 -6 -3 -10 -15 -10 -25 0 -13 -8 -20 -27 -22 -22 -2 -28 -8
-28 -28 l0 -25 345 0 345 0 0 25 c0 20 -6 26 -27 28 l-28 3 0 156 c0 145 -1
155 -19 160 -11 3 -21 15 -23 27 -3 20 -9 21 -93 21 -84 0 -90 -1 -93 -21 -2
-12 -12 -24 -23 -27 -18 -5 -19 -15 -19 -161 0 -149 -1 -156 -20 -156 -19 0
-20 7 -20 156 0 146 -1 156 -19 161 -11 3 -21 15 -23 27 -3 19 -9 21 -83 23
-44 1 -86 -1 -92 -3z m155 -31 c3 -10 -15 -13 -67 -13 -57 0 -71 3 -71 15 0
13 12 15 67 13 42 -2 68 -8 71 -15z m310 0 c3 -10 -16 -13 -72 -13 -70 0 -87
6 -69 24 12 12 136 2 141 -11z m40 -185 c1 -90 -1 -148 -7 -148 -5 0 -11 12
-13 28 l-3 27 -90 0 -90 0 -3 -28 c-2 -15 -8 -27 -13 -27 -10 0 -13 283 -2
294 4 3 54 5 112 4 l106 -3 3 -147z m-348 -128 c0 -18 -7 -20 -70 -20 -63 0
-70 2 -70 20 0 18 7 20 70 20 63 0 70 -2 70 -20z m308 -2 c3 -16 -6 -18 -72
-18 -57 0 -76 3 -76 13 0 24 13 28 79 25 53 -2 66 -6 69 -20z m102 -48 c0 -6
-117 -10 -330 -10 -213 0 -330 4 -330 10 0 6 117 10 330 10 213 0 330 -4 330
-10z"
        />
        <path
          d="M422 331 c-8 -5 -12 -21 -10 -37 3 -26 7 -29 38 -29 31 0 35 3 38 29
4 29 -10 46 -38 46 -8 0 -21 -4 -28 -9z m46 -34 c2 -12 -3 -17 -17 -17 -12 0
-21 6 -21 13 0 31 32 34 38 4z"
        />
        <path
          d="M532 331 c-8 -5 -12 -21 -10 -37 3 -26 7 -29 38 -29 31 0 35 3 38 29
4 29 -10 46 -38 46 -8 0 -21 -4 -28 -9z m46 -34 c2 -12 -3 -17 -17 -17 -12 0
-21 6 -21 13 0 31 32 34 38 4z"
        />
        <path
          d="M422 221 c-8 -5 -12 -21 -10 -37 3 -26 7 -29 38 -29 31 0 35 3 38 29
4 29 -10 46 -38 46 -8 0 -21 -4 -28 -9z m46 -34 c2 -12 -3 -17 -17 -17 -12 0
-21 6 -21 13 0 31 32 34 38 4z"
        />
        <path
          d="M532 221 c-8 -5 -12 -21 -10 -37 3 -26 7 -29 38 -29 31 0 35 3 38 29
4 29 -10 46 -38 46 -8 0 -21 -4 -28 -9z m46 -34 c2 -12 -3 -17 -17 -17 -12 0
-21 6 -21 13 0 31 32 34 38 4z"
        />
        <path
          d="M111 326 c-7 -8 -11 -25 -9 -38 2 -19 9 -23 38 -23 33 0 35 2 35 35
0 30 -4 35 -26 38 -14 2 -31 -4 -38 -12z m47 -29 c2 -10 -3 -17 -12 -17 -10 0
-16 9 -16 21 0 24 23 21 28 -4z"
        />
        <path
          d="M221 326 c-7 -8 -11 -25 -9 -38 2 -19 9 -23 38 -23 33 0 35 2 35 35
0 30 -4 35 -26 38 -14 2 -31 -4 -38 -12z m47 -29 c2 -12 -3 -17 -17 -17 -12 0
-21 6 -21 13 0 31 32 34 38 4z"
        />
        <path
          d="M111 216 c-7 -8 -11 -25 -9 -38 2 -19 9 -23 38 -23 33 0 35 2 35 35
0 30 -4 35 -26 38 -14 2 -31 -4 -38 -12z m47 -29 c2 -10 -3 -17 -12 -17 -10 0
-16 9 -16 21 0 24 23 21 28 -4z"
        />
        <path
          d="M221 216 c-7 -8 -11 -25 -9 -38 2 -19 9 -23 38 -23 33 0 35 2 35 35
0 30 -4 35 -26 38 -14 2 -31 -4 -38 -12z m47 -29 c2 -10 -3 -17 -12 -17 -18 0
-29 16 -21 31 9 14 29 6 33 -14z"
        />
      </g>
    </svg>
  ),
  totalCustomers: ({ className = "", ...props }: LucideProps) => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="71.000000pt"
      height="75.000000pt"
      viewBox="0 0 71.000000 75.000000"
      preserveAspectRatio="xMidYMid meet"
      className={cn("size-[70px]", className)}
      {...props}
    >
      <g
        transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M121 684 c-25 -21 -31 -33 -31 -66 0 -107 147 -134 180 -33 31 94
-73 163 -149 99z m103 -36 c21 -30 20 -44 -4 -68 -24 -24 -53 -26 -74 -4 -19
18 -21 65 -4 82 20 20 65 14 82 -10z"
        />
        <path
          d="M465 686 c-65 -65 -22 -166 70 -166 40 0 85 50 85 95 0 80 -100 126
-155 71z m99 -32 c37 -37 1 -103 -49 -90 -14 4 -31 17 -37 31 -23 52 46 100
86 59z"
        />
        <path
          d="M100 473 c-103 -52 -49 -167 75 -161 37 2 50 7 50 18 0 11 -15 17
-50 21 -77 9 -103 27 -89 63 7 19 30 28 89 35 35 4 50 10 50 21 0 23 -82 25
-125 3z"
        />
        <path
          d="M287 462 c-46 -48 -34 -117 24 -148 79 -40 165 47 125 125 -31 59
-104 70 -149 23z m108 -32 c41 -45 -18 -110 -70 -76 -27 18 -34 63 -13 84 18
18 63 14 83 -8z"
        />
        <path
          d="M485 480 c-12 -19 6 -30 50 -30 74 0 122 -61 67 -86 -9 -4 -39 -10
-67 -13 -35 -4 -50 -10 -50 -21 0 -11 13 -16 50 -18 124 -6 178 109 75 160
-38 19 -115 24 -125 8z"
        />
        <path
          d="M305 265 c-72 -19 -107 -80 -72 -126 32 -42 130 -63 190 -40 37 14
67 51 67 81 0 68 -90 109 -185 85z m130 -55 c24 -20 17 -48 -15 -65 -80 -41
-205 15 -145 65 35 29 125 29 160 0z"
        />
      </g>
    </svg>
  ),
  customerService: ({ className = "", ...props }: LucideProps) => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="70.000000pt"
      height="70.000000pt"
      viewBox="0 0 70.000000 70.000000"
      preserveAspectRatio="xMidYMid meet"
      className={cn("size-[70px]", className)}
      {...props}
    >
      <g
        transform="translate(0.000000,70.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M299 679 c-66 -10 -120 -41 -173 -99 -41 -47 -76 -122 -76 -167 0 -7
-9 -22 -20 -33 -29 -29 -29 -151 0 -180 22 -22 60 -26 78 -8 8 8 12 45 12 99
0 76 -3 90 -19 101 -17 12 -18 20 -12 51 43 188 269 271 423 154 46 -35 86
-97 99 -155 6 -30 5 -38 -12 -50 -16 -11 -19 -25 -19 -102 0 -79 2 -91 20
-102 47 -30 1 -108 -63 -108 -19 0 -40 7 -47 15 -20 24 -105 20 -123 -6 -41
-58 55 -107 116 -59 16 13 40 20 67 20 56 0 100 42 100 94 0 23 7 43 20 56 28
28 29 151 2 178 -10 10 -24 43 -31 74 -12 55 -53 123 -95 161 -32 28 -117 64
-161 69 -22 2 -61 1 -86 -3z m-209 -382 c0 -41 -3 -77 -6 -80 -4 -3 -15 -2
-25 4 -15 8 -19 21 -19 67 0 57 11 82 37 82 9 0 13 -20 13 -73z m558 61 c7 -7
12 -38 12 -70 0 -46 -4 -59 -19 -67 -27 -15 -31 -5 -31 69 0 79 10 96 38 68z
m-178 -293 c0 -11 -11 -15 -40 -15 -29 0 -40 4 -40 15 0 11 11 15 40 15 29 0
40 -4 40 -15z"
        />
        <path
          d="M214 518 c-32 -15 -44 -51 -44 -127 0 -89 14 -127 51 -140 23 -8 29
-16 29 -39 0 -47 26 -48 76 -2 41 37 48 40 102 40 82 0 96 17 101 121 4 91 -9
131 -45 148 -31 14 -241 13 -270 -1z m271 -133 l0 -100 -65 -3 c-59 -3 -68 -6
-102 -39 l-37 -36 -3 34 c-3 29 -7 35 -33 39 l-30 5 -3 89 c-2 49 0 96 2 103
4 11 34 13 138 11 l133 -3 0 -100z"
        />
        <path
          d="M257 404 c-16 -16 -7 -44 14 -44 15 0 20 5 17 22 -3 22 -19 33 -31
22z"
        />
        <path
          d="M337 404 c-16 -16 -7 -44 14 -44 15 0 20 5 17 22 -3 22 -19 33 -31
22z"
        />
        <path
          d="M417 404 c-16 -16 -7 -44 14 -44 15 0 20 5 17 22 -3 22 -19 33 -31
22z"
        />
      </g>
    </svg>
  ),
  manageRealEstate: ({ className = "", ...props }: LucideProps) => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="118.000000pt"
      height="118.000000pt"
      viewBox="0 0 118.000000 118.000000"
      preserveAspectRatio="xMidYMid meet"
      className={cn("size-[70px]", className)}
      {...props}
    >
      <g
        transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M506 919 c-44 -11 -116 -49 -116 -61 0 -12 9 -10 69 19 45 22 70 27
131 27 91 0 170 -30 170 -63 0 -17 6 -21 35 -21 39 0 39 -1 25 35 -6 15 -16
25 -23 22 -6 -2 -35 7 -64 20 -59 27 -166 38 -227 22z"
        />
        <path
          d="M540 810 c0 -29 -37 -45 -67 -29 -22 12 -27 10 -55 -19 -29 -28 -31
-33 -19 -55 16 -30 0 -67 -29 -67 -17 0 -20 -7 -20 -50 0 -43 3 -50 20 -50 29
0 45 -37 29 -66 -10 -20 -10 -27 7 -45 30 -33 53 -42 70 -28 21 17 64 -4 64
-31 0 -17 6 -20 50 -20 43 0 50 3 50 20 0 29 37 45 66 29 20 -10 27 -10 45 7
33 30 42 53 28 70 -17 21 4 64 31 64 17 0 20 6 20 50 0 43 -3 50 -20 50 -29 0
-45 37 -29 67 12 22 10 27 -19 55 -28 29 -33 31 -55 19 -30 -16 -67 0 -67 29
0 17 -7 20 -50 20 -43 0 -50 -3 -50 -20z m80 -20 c0 -28 63 -54 90 -37 16 9
23 8 37 -6 14 -14 15 -21 6 -37 -17 -27 9 -90 37 -90 16 0 20 -7 20 -30 0 -23
-4 -30 -20 -30 -28 0 -54 -63 -37 -90 9 -16 8 -23 -6 -37 -14 -14 -21 -15 -37
-6 -27 17 -90 -9 -90 -37 0 -16 -7 -20 -30 -20 -23 0 -30 4 -30 20 0 28 -63
54 -90 37 -16 -9 -23 -8 -37 6 -14 14 -15 21 -6 37 17 27 -9 90 -37 90 -16 0
-20 7 -20 30 0 23 4 30 20 30 28 0 54 63 37 90 -17 29 14 60 43 43 27 -17 90
9 90 37 0 16 7 20 30 20 23 0 30 -4 30 -20z"
        />
        <path
          d="M518 695 c-61 -41 -75 -116 -33 -177 71 -105 235 -51 235 78 0 39
-38 94 -76 110 -48 20 -85 17 -126 -11z m139 -20 c35 -23 49 -82 29 -128 -34
-83 -150 -85 -190 -3 -17 36 -18 43 -5 80 24 69 101 93 166 51z"
        />
        <path
          d="M327 802 c-28 -30 -20 -49 8 -22 25 24 32 40 17 40 -5 0 -16 -8 -25
-18z"
        />
        <path d="M282 728 c-14 -14 -16 -48 -3 -48 9 0 25 49 18 56 -2 2 -9 -2 -15 -8z" />
        <path d="M900 656 c0 -14 5 -28 11 -31 15 -10 18 -4 12 28 -7 34 -23 36 -23 3z" />
        <path d="M256 643 c-9 -10 -7 -53 3 -53 11 0 21 49 11 55 -4 2 -10 2 -14 -2z" />
        <path d="M908 565 c-5 -25 3 -40 16 -28 9 10 7 53 -3 53 -5 0 -11 -11 -13 -25z" />
        <path
          d="M253 539 c4 -13 7 -27 7 -31 0 -5 5 -8 11 -8 15 0 6 53 -10 58 -10 4
-12 -1 -8 -19z"
        />
        <path
          d="M886 478 c-9 -36 -7 -41 9 -28 16 13 21 50 6 50 -5 0 -11 -10 -15
-22z"
        />
        <path
          d="M841 396 c-14 -14 -21 -29 -17 -33 9 -9 49 32 44 47 -2 6 -13 1 -27
-14z"
        />
        <path
          d="M350 356 c0 -23 23 -56 37 -54 10 1 41 -9 68 -22 41 -20 66 -24 135
-25 73 0 93 4 143 28 31 16 57 33 57 38 0 14 -8 12 -69 -18 -45 -22 -70 -27
-131 -27 -91 0 -170 30 -170 63 0 17 -6 21 -35 21 -19 0 -35 -2 -35 -4z"
        />
      </g>
    </svg>
  ),
  sellAndBuyRealEstate: ({ className = "", ...props }: LucideProps) => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="70.000000pt"
      height="70.000000pt"
      viewBox="0 0 70.000000 70.000000"
      preserveAspectRatio="xMidYMid meet"
      className={cn("size-[70px]", className)}
      {...props}
    >
      <g
        transform="translate(0.000000,70.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M120 615 l-85 -85 135 -135 c74 -74 139 -135 144 -135 5 0 40 31 78
69 38 38 81 72 96 76 15 3 36 15 47 25 15 14 39 20 90 22 l70 3 3 98 3 97 -56
0 c-30 0 -55 -4 -55 -10 0 -5 -8 -10 -18 -10 -10 0 -23 -5 -28 -10 -8 -8 -34
0 -85 25 -81 39 -96 41 -154 20 -38 -14 -41 -13 -65 10 -15 14 -28 25 -31 25
-2 0 -43 -38 -89 -85z m108 28 c2 -8 -6 -13 -22 -13 -25 0 -33 10 -19 24 10
10 36 3 41 -11z m237 -30 l75 -38 0 -52 c0 -41 -5 -57 -22 -73 -28 -26 -68
-26 -101 1 -15 11 -50 28 -79 38 -57 19 -80 43 -61 62 9 9 29 6 83 -10 40 -12
74 -20 77 -17 11 10 -8 24 -51 36 -24 7 -57 25 -72 41 l-27 28 24 10 c43 17
78 12 154 -26z m205 -58 c0 -73 -1 -75 -25 -75 -24 0 -25 2 -25 75 0 73 1 75
25 75 24 0 25 -2 25 -75z m-394 39 c2 -5 -17 -24 -41 -42 -25 -18 -48 -44 -51
-57 -7 -30 17 -71 51 -87 30 -14 82 5 90 33 5 15 12 18 28 13 12 -3 23 -7 24
-8 1 -1 3 -22 5 -46 l3 -45 -67 -1 -67 -1 -58 59 c-57 58 -57 58 -59 120 0 35
1 66 2 69 5 10 138 4 140 -7z m314 -54 c0 -33 -4 -60 -10 -60 -6 0 -10 27 -10
60 0 33 4 60 10 60 6 0 10 -27 10 -60z m-480 -5 c0 -26 -14 -33 -25 -15 -9 14
1 40 15 40 5 0 10 -11 10 -25z m136 -26 c3 -6 19 -19 36 -29 27 -16 28 -19 13
-34 -41 -41 -100 3 -79 58 7 19 20 21 30 5z m179 -99 c3 -5 1 -10 -4 -10 -6 0
-11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-87 -92 c-3 -7 -13 -13 -23 -13
-10 0 -20 6 -22 13 -3 7 5 12 22 12 17 0 25 -5 23 -12z"
        />
        <path d="M465 521 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z" />
        <path
          d="M195 271 c-11 -5 -29 -18 -39 -30 -16 -17 -30 -21 -88 -21 l-68 0 0
-95 0 -95 55 0 c30 0 55 5 55 10 0 6 8 10 18 10 10 0 23 5 29 11 7 7 31 0 82
-25 39 -20 81 -36 93 -36 28 0 244 75 276 96 14 9 22 24 22 42 0 53 -36 64
-123 38 -41 -12 -48 -12 -61 3 -8 9 -39 25 -68 35 -29 11 -64 27 -78 36 -32
22 -79 31 -105 21z m85 -42 c19 -12 57 -29 84 -39 56 -19 78 -42 58 -62 -9 -9
-26 -7 -80 10 -80 26 -82 26 -82 8 0 -8 29 -22 73 -35 88 -26 83 -26 110 2 25
26 136 62 150 48 5 -5 7 -17 5 -27 -2 -14 -35 -30 -118 -61 -63 -23 -127 -42
-141 -42 -15 -1 -61 15 -103 35 l-76 36 0 51 c0 38 5 56 22 74 27 29 53 29 98
2z m-200 -104 c0 -73 -1 -75 -25 -75 -24 0 -25 2 -25 75 0 73 1 75 25 75 24 0
25 -2 25 -75z m50 15 c0 -33 -4 -60 -10 -60 -6 0 -10 27 -10 60 0 33 4 60 10
60 6 0 10 -27 10 -60z"
        />
        <path
          d="M210 160 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0 -16
-4 -16 -10z"
        />
      </g>
    </svg>
  ),

  delete: ({ className = "", ...props }: LucideProps) => (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-8", className)}
      {...props}
    >
      <path
        d="M4.33398 24C3.60065 24 2.97287 23.7389 2.45065 23.2167C1.92843 22.6944 1.66732 22.0667 1.66732 21.3333V4H0.333984V1.33333H7.00065V0H15.0007V1.33333H21.6673V4H20.334V21.3333C20.334 22.0667 20.0729 22.6944 19.5507 23.2167C19.0284 23.7389 18.4007 24 17.6673 24H4.33398ZM17.6673 4H4.33398V21.3333H17.6673V4ZM7.00065 18.6667H9.66732V6.66667H7.00065V18.6667ZM12.334 18.6667H15.0007V6.66667H12.334V18.6667Z"
        fill="#FF0202"
      />
    </svg>
  ),
  ruler: ({ className = "", ...props }: LucideProps) => (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        d="M11.6409 0.935255L1.43521 11.141C1.19485 11.3813 1.19485 11.771 1.43521 12.0114L5.48866 16.0648C5.72902 16.3052 6.11872 16.3052 6.35908 16.0648L16.5648 5.85913C16.8051 5.61877 16.8051 5.22907 16.5648 4.9887L12.5113 0.935255C12.271 0.694894 11.8813 0.694895 11.6409 0.935255Z"
        stroke="#4883FB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.73828 3.41211L11.9226 5.59643"
        stroke="#4883FB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.82422 6.3252L9.73664 9.23762"
        stroke="#4883FB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.91211 9.2373L6.09643 11.4216"
        stroke="#4883FB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  bed: ({ className = "", ...props }: LucideProps) => (
    <svg
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.29665 0.666992H8.70465C9.92998 0.666992 10.9007 0.666992 11.66 0.768992C12.4413 0.874326 13.074 1.09566 13.5733 1.59433C14.072 2.09366 14.2933 2.72633 14.3987 3.50766C14.4993 4.25833 14.5007 5.21433 14.5007 6.41966C14.73 6.60833 14.912 6.85299 15.0273 7.13233C15.108 7.32566 15.1393 7.52566 15.154 7.73699C15.1673 7.93966 15.1673 8.18699 15.1673 8.48366V8.51699C15.1673 8.81366 15.1673 9.06099 15.154 9.26366C15.1454 9.47082 15.1026 9.67513 15.0273 9.86833C14.9353 10.0908 14.8003 10.293 14.6301 10.4633C14.4598 10.6337 14.2578 10.7688 14.0353 10.861C13.842 10.941 13.642 10.9723 13.4307 10.9863C13.343 10.9922 13.2552 10.9959 13.1673 10.9977V11.8337C13.1673 11.9663 13.1146 12.0934 13.0209 12.1872C12.9271 12.281 12.7999 12.3337 12.6673 12.3337C12.5347 12.3337 12.4075 12.281 12.3138 12.1872C12.22 12.0934 12.1673 11.9663 12.1673 11.8337V11.0003H3.83398V11.8337C3.83398 11.9663 3.78131 12.0934 3.68754 12.1872C3.59377 12.281 3.46659 12.3337 3.33398 12.3337C3.20138 12.3337 3.0742 12.281 2.98043 12.1872C2.88666 12.0934 2.83398 11.9663 2.83398 11.8337V10.997C2.74614 10.9955 2.65833 10.9919 2.57065 10.9863C2.36357 10.9781 2.15926 10.9358 1.96598 10.861C1.74342 10.7689 1.5412 10.6338 1.37087 10.4634C1.20055 10.2931 1.06545 10.0909 0.973318 9.86833C0.893318 9.67499 0.861984 9.47499 0.847984 9.26366C0.833984 9.06099 0.833984 8.81366 0.833984 8.51699V8.48366C0.833984 8.18699 0.833984 7.93966 0.847318 7.73699C0.861984 7.52499 0.893984 7.32566 0.973984 7.13233C1.08853 6.85504 1.26937 6.6101 1.50065 6.41899C1.50065 5.21499 1.50198 4.25833 1.60265 3.50766C1.70798 2.72633 1.92932 2.09366 2.42798 1.59433C2.92732 1.09566 3.55998 0.874326 4.34132 0.768992C5.10132 0.666992 6.07132 0.666992 7.29665 0.666992ZM2.50065 6.01966C2.72257 6.00532 2.94494 5.99887 3.16732 6.00033V5.46566C3.16732 4.86699 3.16732 4.36699 3.22065 3.97099C3.27665 3.55233 3.40065 3.17433 3.70398 2.87099C4.00798 2.56699 4.38598 2.44299 4.80398 2.38699C5.20065 2.33366 5.70065 2.33366 6.29932 2.33366H9.70198C10.3013 2.33366 10.8007 2.33366 11.1967 2.38699C11.6153 2.44299 11.9933 2.56699 12.2967 2.87033C12.6007 3.17433 12.7247 3.55233 12.7807 3.97033C12.834 4.36699 12.834 4.86699 12.834 5.46566V6.00033C13.0564 5.99887 13.2787 6.00532 13.5007 6.01966C13.4987 4.99633 13.4873 4.23633 13.4073 3.64099C13.3173 2.97033 13.148 2.58366 12.866 2.30099C12.584 2.01966 12.1973 1.85033 11.5267 1.76033C10.842 1.66833 9.93865 1.66699 8.66732 1.66699H7.33398C6.06265 1.66699 5.15998 1.66833 4.47398 1.76033C3.80398 1.85033 3.41732 2.01966 3.13532 2.30166C2.85332 2.58366 2.68398 2.97033 2.59398 3.64099C2.51398 4.23633 2.50265 4.99633 2.50065 6.01966ZM11.834 6.00033V5.50033C11.834 4.85766 11.8327 4.42566 11.7893 4.10366C11.748 3.79633 11.6767 3.66433 11.5893 3.57766C11.5027 3.49099 11.3713 3.41966 11.064 3.37766C10.742 3.33499 10.31 3.33366 9.66732 3.33366H8.50065V6.00033H11.834ZM7.50065 6.00033V3.33366H6.33398C5.69132 3.33366 5.25932 3.33499 4.93732 3.37833C4.62998 3.41966 4.49798 3.49099 4.41132 3.57833C4.32465 3.66499 4.25332 3.79633 4.21132 4.10366C4.16865 4.42566 4.16732 4.85766 4.16732 5.50033V6.00033H7.50065ZM2.63865 7.01166C2.47798 7.02299 2.39998 7.04233 2.34865 7.06366C2.24745 7.10554 2.1555 7.16696 2.07806 7.2444C2.00062 7.32185 1.9392 7.41379 1.89732 7.51499C1.87598 7.56633 1.85665 7.64433 1.84532 7.80499C1.83398 7.96966 1.83398 8.18299 1.83398 8.50033C1.83398 8.81766 1.83398 9.03099 1.84532 9.19566C1.85665 9.35633 1.87598 9.43433 1.89732 9.48566C1.98198 9.69033 2.14398 9.85233 2.34865 9.93699C2.39998 9.95833 2.47798 9.97766 2.63865 9.98899C2.80332 10.0003 3.01665 10.0003 3.33398 10.0003H12.6673C12.9847 10.0003 13.198 10.0003 13.3626 9.98899C13.5233 9.97766 13.6013 9.95833 13.6527 9.93699C13.8573 9.85233 14.0193 9.69033 14.104 9.48566C14.1253 9.43433 14.1447 9.35633 14.156 9.19566C14.1673 9.03099 14.1673 8.81766 14.1673 8.50033C14.1673 8.18299 14.1673 7.96966 14.156 7.80499C14.1447 7.64433 14.1253 7.56633 14.104 7.51499C14.0621 7.41379 14.0007 7.32185 13.9232 7.2444C13.8458 7.16696 13.7538 7.10554 13.6527 7.06366C13.6013 7.04233 13.5233 7.02299 13.3626 7.01166C13.131 7.0008 12.8992 6.99702 12.6673 7.00033H3.33398C3.01665 7.00033 2.80332 7.00033 2.63865 7.01166Z"
        fill="#4883FB"
      />
    </svg>
  ),
  bath: ({ className = "", ...props }: LucideProps) => (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        d="M13.0026 8.83398V9.50065C13.0026 10.774 12.2893 11.8807 11.2359 12.4406L11.6693 14.1673H10.3359L10.0026 12.834H4.0026L3.66927 14.1673H2.33594L2.76927 12.4406C2.23539 12.1574 1.78881 11.7341 1.47753 11.2161C1.16626 10.6981 1.00206 10.105 1.0026 9.50065V8.83398H0.335938V7.50065H12.3359V2.83398C12.3359 2.65717 12.2657 2.4876 12.1407 2.36258C12.0157 2.23756 11.8461 2.16732 11.6693 2.16732C11.3359 2.16732 11.0826 2.39398 11.0026 2.69398C11.4226 3.05398 11.6693 3.58732 11.6693 4.16732H7.66927C7.66927 3.63688 7.87998 3.12818 8.25506 2.7531C8.63013 2.37803 9.13884 2.16732 9.66927 2.16732H9.7826C10.0559 1.39398 10.7959 0.833984 11.6693 0.833984C12.1997 0.833984 12.7084 1.0447 13.0835 1.41977C13.4586 1.79484 13.6693 2.30355 13.6693 2.83398V8.83398H13.0026ZM11.6693 8.83398H2.33594V9.50065C2.33594 10.0311 2.54665 10.5398 2.92172 10.9149C3.2968 11.2899 3.8055 11.5007 4.33594 11.5007H9.66927C10.1997 11.5007 10.7084 11.2899 11.0835 10.9149C11.4586 10.5398 11.6693 10.0311 11.6693 9.50065V8.83398Z"
        fill="#4883FB"
      />
    </svg>
  ),
  mobile: ({ className = "", ...props }: LucideProps) => (
    <svg
      width="11"
      height="17"
      viewBox="0 0 11 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[18px] text-black", className)}
      {...props}
    >
      <path
        d="M8.625 0.384766H2.625C2.12772 0.384766 1.65081 0.58231 1.29917 0.933941C0.947544 1.28557 0.75 1.76249 0.75 2.25977V15.0098C0.75 15.5071 0.947544 15.984 1.29917 16.3356C1.65081 16.6872 2.12772 16.8848 2.625 16.8848H8.625C9.12228 16.8848 9.59919 16.6872 9.95082 16.3356C10.3025 15.984 10.5 15.5071 10.5 15.0098V2.25977C10.5 1.76249 10.3025 1.28557 9.95082 0.933941C9.59919 0.58231 9.12228 0.384766 8.625 0.384766ZM5.625 16.1348C5.0025 16.1348 4.5 15.6323 4.5 15.0098C4.5 14.3873 5.0025 13.8848 5.625 13.8848C6.2475 13.8848 6.75 14.3873 6.75 15.0098C6.75 15.6323 6.2475 16.1348 5.625 16.1348ZM9 13.1348H2.25V2.63477H9V13.1348Z"
        fill="black"
      />
    </svg>
  ),
  phone: ({ className = "", ...props }: LucideProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[18px] text-black", className)}
      {...props}
    >
      <path
        d="M13.6354 10.1543L10.323 8.66998L10.3138 8.66576C10.1419 8.59221 9.95429 8.56269 9.76805 8.57988C9.58181 8.59707 9.40279 8.66042 9.24719 8.76419C9.22887 8.77629 9.21127 8.78944 9.19446 8.80357L7.48305 10.2626C6.39883 9.73591 5.27946 8.62498 4.75282 7.55482L6.21391 5.8174C6.22798 5.79982 6.24133 5.78224 6.25399 5.76326C6.35554 5.60808 6.41716 5.4302 6.43335 5.24546C6.44954 5.06071 6.41981 4.87483 6.3468 4.70435V4.69591L4.85829 1.37787C4.76178 1.15516 4.59583 0.969642 4.38522 0.849002C4.1746 0.728362 3.93062 0.679072 3.68969 0.708491C2.73694 0.833862 1.8624 1.30177 1.22941 2.02481C0.596427 2.74785 0.248284 3.67659 0.250006 4.63755C0.250006 10.2204 4.79219 14.7626 10.375 14.7626C11.336 14.7643 12.2647 14.4161 12.9878 13.7831C13.7108 13.1502 14.1787 12.2756 14.3041 11.3229C14.3335 11.082 14.2844 10.8381 14.1638 10.6275C14.0433 10.4169 13.858 10.2509 13.6354 10.1543ZM10.375 13.6376C7.98886 13.6349 5.70119 12.6859 4.01392 10.9986C2.32666 9.31137 1.37761 7.0237 1.37501 4.63755C1.37236 3.95094 1.61973 3.28685 2.07091 2.76928C2.5221 2.25172 3.14625 1.91608 3.8268 1.82505C3.82653 1.82786 3.82653 1.83068 3.8268 1.83349L5.30337 5.13818L3.85001 6.87771C3.83525 6.89468 3.82185 6.91279 3.80993 6.93185C3.70412 7.09421 3.64205 7.28116 3.62973 7.47457C3.61741 7.66797 3.65526 7.86128 3.73962 8.03576C4.37665 9.33865 5.68938 10.6415 7.00633 11.2779C7.18209 11.3614 7.37652 11.398 7.57062 11.3839C7.76473 11.3699 7.95187 11.3057 8.11376 11.1977C8.13181 11.1855 8.14918 11.1724 8.16579 11.1583L9.87508 9.70005L13.1798 11.1801H13.1875C13.0976 11.8616 12.7624 12.4871 12.2448 12.9394C11.7271 13.3917 11.0624 13.6399 10.375 13.6376Z"
        fill="black"
      />
    </svg>
  ),
  mail: ({ className = "", ...props }: LucideProps) => (
    <svg
      width="24"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[18px] text-black", className)}
      {...props}
    >
      <g filter="url(#filter0_d_582_201)">
        <path
          d="M19.5 2.38965C19.5 1.56465 18.825 0.889648 18 0.889648H6C5.175 0.889648 4.5 1.56465 4.5 2.38965V11.3896C4.5 12.2146 5.175 12.8896 6 12.8896H18C18.825 12.8896 19.5 12.2146 19.5 11.3896V2.38965ZM18 2.38965L12 6.13965L6 2.38965H18ZM18 11.3896H6V3.88965L12 7.63965L18 3.88965V11.3896Z"
          fill="black"
        />
        <path
          d="M18.265 2.81365L18.9994 2.35465C18.9998 2.36627 19 2.37794 19 2.38965V11.3896C19 11.9385 18.5489 12.3896 18 12.3896H6C5.45114 12.3896 5 11.9385 5 11.3896V2.38965C5 2.37794 5.00021 2.36627 5.00061 2.35466L5.735 2.81365L11.735 6.56365L12 6.72927L12.265 6.56365L18.265 2.81365ZM18.8646 1.88965H18H6H5.13542C5.3093 1.5916 5.63278 1.38965 6 1.38965H18C18.3672 1.38965 18.6907 1.5916 18.8646 1.88965ZM18 11.8896H18.5V11.3896V3.88965V2.98752L17.735 3.46565L12 7.05002L6.265 3.46565L5.5 2.98752V3.88965V11.3896V11.8896H6H18Z"
          stroke="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_582_201"
          x="0.5"
          y="0.889648"
          width="23"
          height="20"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_582_201"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_582_201"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
} as const;
