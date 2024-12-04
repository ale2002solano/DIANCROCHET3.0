//kit
export default function Sheep({ color }: { color: string }) {
return(
  <svg
    fill={color}
    height="20px"
    width="20px"
	strokeWidth={2}
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512.001 512.001"
  >
    <g>
      <g>
        <g>
          <path
            d="M455.279,105.987h-7.188c-2.475-14.786-15.362-26.091-30.84-26.091c-5.478,0-10.742,1.4-15.383,4.031
				c-7.369-6.578-17.016-10.348-27.028-10.348c-12.239,0-23.616,5.483-31.227,14.698c-4.923-2.066-10.216-3.159-15.65-3.159
				c-1.831,0-3.661,0.123-5.472,0.37c-7.379-6.567-16.961-10.258-26.935-10.258c-9.586,0-18.658,3.325-25.856,9.316
				c-10.823-8.252-23.982-12.723-37.804-12.723c-11.015,0-21.631,2.839-31.059,8.261c-7.001-5.307-15.628-8.261-24.498-8.261
				c-14.732,0-27.905,7.804-35.031,20.112c-6.935-2.57-14.33-3.907-21.774-3.907c-19.503,0-37.953,9.276-49.691,24.607
				c-3.771-1.075-7.791-1.351-11.707-0.763c-4.32-3.805-9.92-5.967-15.804-5.967c-5.74,0-11.197,2.035-15.488,5.688
				C11.94,112.188,0,124.501,0,139.549c0,14.368,10.884,26.241,24.84,27.81c-0.039,0.302-0.074,0.606-0.106,0.91
				c-12.693,11.818-19.903,28.289-19.903,45.737c0,14.201,4.774,27.806,13.538,38.833c-2.073,6.286-3.122,12.844-3.122,19.558
				c0,30.804,22.427,56.896,52.571,61.707c2.325,1.95,4.738,3.833,7.217,5.631v8.61c0,17.055,9.651,31.892,23.773,39.359v44.369
				c0,4.478,3.628,8.107,8.107,8.107h25.239c4.478,0,8.106-3.628,8.106-8.107v-44.359c0.735-0.386,1.455-0.797,2.165-1.224
				c0.707,0.425,1.427,0.827,2.156,1.211v44.372c0,4.478,3.628,8.107,8.107,8.107h25.253c4.478,0,8.107-3.628,8.107-8.107v-44.338
				c6.091-3.2,11.403-7.796,15.466-13.479c8.56,3.899,17.916,5.969,27.532,5.969c11.615,0,22.732-2.931,32.639-8.55
				c4.208,6.857,10.175,12.362,17.18,16.045v44.353c0,4.478,3.628,8.107,8.107,8.107h25.24c4.478,0,8.107-3.628,8.107-8.107v-44.302
				c0.754-0.394,1.496-0.811,2.223-1.246c0.692,0.413,1.394,0.805,2.106,1.18v44.368c0,4.478,3.628,8.107,8.107,8.107h25.245
				c4.478,0,8.107-3.628,8.107-8.107v-44.369c14.121-7.467,23.772-22.304,23.772-39.359v-1.774
				c19.926-10.462,33.555-31.349,33.555-55.373c0-1.965-0.097-3.954-0.292-5.951c8.368-7.631,13.241-18.496,13.241-29.946
				c0-10.01-3.761-19.71-10.422-27.115c-0.138-2.926-0.382-5.849-0.714-8.757h30.034c31.276,0,56.722-25.445,56.722-56.721
				C512,131.433,486.555,105.987,455.279,105.987z M124.048,423.966h-9.026v-31.352c1.484,0.151,2.99,0.228,4.513,0.228
				s3.024-0.105,4.514-0.254V423.966z M169.836,423.966h-0.001h-9.04v-31.365c1.5,0.154,3.01,0.242,4.528,0.242
				c1.52,0,3.025-0.083,4.514-0.233V423.966z M165.321,376.629c-3.484,0-6.845-0.632-9.999-1.825
				c1.807-2.445,3.382-5.084,4.67-7.902c1.893,0.272,3.805,0.409,5.726,0.409c5.093,0,10.049-0.935,14.757-2.782h5.674
				c0.484,0.41,0.983,0.8,1.477,1.194C182.353,372.503,174.198,376.629,165.321,376.629z M304.104,423.966h-9.027v-31.373
				c1.489,0.15,2.993,0.251,4.515,0.251c1.524,0,3.029-0.083,4.513-0.231V423.966z M349.892,423.966h-0.001h-9.032v-31.365
				c1.498,0.154,3.006,0.242,4.52,0.242c1.523,0,3.029-0.077,4.513-0.228V423.966z M345.378,376.629c-3.47,0-6.82-0.626-9.964-1.81
				c4.095-5.551,6.936-12.102,8.089-19.259c2.236-0.878,4.442-1.813,6.606-2.803c3.591,0.63,7.218,0.949,10.815,0.949
				c4.256,0,8.415-0.43,12.435-1.245C371.361,366.114,359.578,376.629,345.378,376.629z M409.832,275.183
				c-2.564,1.806-3.857,4.928-3.318,8.018c0.468,2.689,0.705,5.381,0.705,7.998c0,25.527-20.768,46.294-46.293,46.294
				c-3.355,0-6.752-0.377-10.1-1.12c-1.782-0.396-3.647-0.178-5.291,0.618c-3.924,1.901-8.042,3.603-12.241,5.058
				c-3.16,1.095-5.323,4.019-5.446,7.361c-0.564,15.263-12.976,27.219-28.257,27.219c-12.253,0-23.052-7.818-26.872-19.453
				c-0.825-2.511-2.821-4.462-5.349-5.228c-2.534-0.767-5.273-0.253-7.353,1.376c-8.923,6.991-19.633,10.686-30.971,10.686
				c-12.766,0-24.943-4.799-34.288-13.515c-1.501-1.4-3.477-2.179-5.529-2.179h-10.372c-1.133,0-2.254,0.238-3.289,0.697
				c-5.653,2.511-12.132,2.768-18.023,0.659c-2.15-0.771-4.526-0.599-6.545,0.477c-2.016,1.073-3.487,2.95-4.047,5.164
				c-3.178,12.549-14.453,21.315-27.419,21.315c-15.597,0-28.285-12.688-28.285-28.285V335.52c0-2.69-1.334-5.204-3.563-6.713
				c-3.875-2.623-7.601-5.488-11.072-8.515c-1.23-1.071-2.753-1.748-4.373-1.94c-23.248-2.756-40.78-22.512-40.78-45.955
				c0-6.264,1.228-12.335,3.647-18.047c1.252-2.953,0.645-6.365-1.549-8.705c-8.071-8.614-12.515-19.85-12.515-31.638
				c0-13.816,6.107-26.808,16.757-35.645c1.83-1.518,2.901-3.762,2.929-6.14c0.047-3.829,0.965-7.495,2.732-10.893
				c1.599-3.078,1.064-6.831-1.332-9.339c-2.397-2.508-6.12-3.213-9.268-1.756c-1.557,0.722-3.199,1.088-4.878,1.088
				c-6.491,0-11.772-5.281-11.772-11.773c0-6.491,5.281-11.772,11.772-11.772c0.396,0,0.814,0.023,1.242,0.07
				c2.719,0.287,5.404-0.799,7.141-2.911c1.474-1.794,3.649-2.823,5.964-2.823c2.543,0,4.924,1.259,6.371,3.368
				c2.095,3.059,5.998,4.304,9.478,3.03c3.493-1.28,7.237-0.832,10.274,1.081c1.85,1.165,4.09,1.533,6.215,1.025
				c2.126-0.511,3.954-1.858,5.073-3.735c8.316-13.967,23.564-22.643,39.792-22.643c7.686,0,15.295,1.92,22.005,5.553
				c2.133,1.154,4.665,1.295,6.912,0.383c2.245-0.912,3.964-2.78,4.687-5.093c3.184-10.197,12.508-17.046,23.201-17.046
				c6.806,0,13.118,2.749,17.771,7.738c2.791,2.991,7.369,3.434,10.682,1.038c7.931-5.742,17.304-8.776,27.104-8.776
				c12.261,0,23.818,4.751,32.542,13.377c1.64,1.621,3.889,2.466,6.192,2.327c2.301-0.141,4.434-1.253,5.865-3.061
				c4.647-5.87,11.594-9.237,19.062-9.237c6.945,0,13.575,2.986,18.189,8.194c2.02,2.278,5.146,3.232,8.094,2.472
				c1.997-0.515,4.058-0.777,6.124-0.777c2.76,0,5.458,0.476,8.012,1.368c-1.078,3.689-1.65,7.531-1.65,11.396
				c0,4.478,3.628,8.107,8.106,8.107c4.477,0,8.107-3.628,8.107-8.107c0-4.045,0.957-7.887,2.843-11.419
				c4.242-7.947,12.465-12.882,21.46-12.882c7.767,0,14.883,3.583,19.525,9.832c1.405,1.892,3.564,3.078,5.913,3.25
				c2.355,0.173,4.66-0.685,6.325-2.351c2.848-2.846,6.63-4.413,10.65-4.413c8.302,0,15.056,6.753,15.056,15.055
				c0,0.559-0.03,1.11-0.09,1.653c-0.026,0.164-0.048,0.33-0.064,0.496c-1.046,7.288-7.33,12.907-14.903,12.907
				c-3.283,0-6.417-1.059-9.063-3.064c-1.88-1.426-4.29-1.964-6.594-1.465c-2.308,0.494-4.285,1.968-5.415,4.038
				c-1.462,2.676-3.4,5.034-5.757,7.007c-3.141,2.629-3.827,7.187-1.6,10.625c4.857,7.496,7.426,16.186,7.426,25.13
				c0,2.429-0.19,4.864-0.564,7.239c-0.755,4.787-2.261,9.413-4.473,13.751c-1.755,3.443-0.837,7.645,2.194,10.042
				c3.645,2.882,5.736,7.183,5.736,11.8c0,4.478,3.63,8.107,8.107,8.107h1.648c0.536,4.092,0.875,8.224,0.968,12.358
				c0.049,2.183,0.976,4.256,2.574,5.746c4.986,4.653,7.731,10.963,7.731,17.768C420.168,263.191,416.304,270.624,409.832,275.183z
				 M455.279,203.218h-40.985c-1.163-4.35-3.259-8.393-6.161-11.868c1.661-4.218,2.857-8.6,3.565-13.089
				c0.507-3.209,0.763-6.495,0.763-9.767c0-9.854-2.309-19.482-6.723-28.193l0.041-0.048c3.621,1.439,7.491,2.182,11.471,2.182
				c13.358,0,24.789-8.422,29.258-20.234h8.77c22.336,0,40.509,18.173,40.509,40.51
				C495.787,185.046,477.616,203.218,455.279,203.218z"
          />
          <path
            d="M432.903,144.463c-3.35,0-6.066,2.716-6.066,6.068s2.717,6.067,6.066,6.067c3.354,0,6.069-2.716,6.069-6.067
				C438.973,147.179,436.256,144.463,432.903,144.463z"
          />
          <path
            d="M370.792,149.933c-4.478,0-8.106,3.628-8.106,8.107v26.084c0,4.478,3.628,8.107,8.106,8.107s8.107-3.628,8.107-8.107
				V158.04C378.898,153.562,375.268,149.933,370.792,149.933z"
          />
        </g>
      </g>
    </g>
  </svg>);
}
