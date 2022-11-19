import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";

function NavBar() {
	return (
		<>
			<div className="main-navbar-container">
				<div className="logo-container">
					<Image src="/Milaor.png" width="80px" height="80px"></Image>
				</div>
				<div className="icon-container">
					<Link href="/dashboard">
						<a>
							<svg
								viewBox="0 0 48 49"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M24 0C37.2552 0 48 10.8727 48 24.2857C48 37.6987 37.2552 48.5714 24 48.5714C10.7448 48.5714 0 37.6987 0 24.2857C0 10.8727 10.7448 0 24 0ZM24 7.28571C20.7229 7.28545 17.5173 8.25506 14.7779 10.0751C12.0385 11.8952 9.88494 14.4863 8.58249 17.5292C7.28004 20.5722 6.88553 23.9342 7.44755 27.2012C8.00958 30.4682 9.50359 33.4975 11.7456 35.9161L12.12 36.3047L15.5136 32.8731C13.644 30.9831 12.4433 28.5214 12.0979 25.8701C11.7524 23.2189 12.2816 20.5264 13.6031 18.2106C14.9246 15.8948 16.9647 14.0852 19.4066 13.0627C21.8486 12.0402 24.5557 11.862 27.108 12.5557L30.8592 8.76229C28.7011 7.78662 26.3637 7.28344 24 7.28571ZM39.3408 17.3473L35.5944 21.1407C35.8584 22.1437 36 23.1977 36 24.2857C36 27.6371 34.656 30.6729 32.4864 32.8731L35.88 36.3071C37.4419 34.7299 38.6806 32.8559 39.5249 30.793C40.3692 28.73 40.8025 26.5186 40.8 24.2857C40.8037 21.8945 40.3064 19.5297 39.3408 17.3473ZM34.1808 10.5473L25.2408 19.5913C24.5296 19.3997 23.7843 19.376 23.0626 19.5221C22.3409 19.6681 21.662 19.98 21.0783 20.4336C20.4945 20.8872 20.0216 21.4705 19.6959 22.1384C19.3703 22.8063 19.2006 23.5409 19.2 24.2857C19.2013 24.9763 19.348 25.6586 19.6305 26.2872C19.913 26.9159 20.3246 27.4763 20.8381 27.9312C21.3515 28.3861 21.955 28.725 22.6081 28.9252C23.2612 29.1255 23.949 29.1825 24.6256 29.0925C25.3022 29.0025 25.9521 28.7675 26.5318 28.4033C27.1116 28.039 27.608 27.5539 27.9878 26.9802C28.3676 26.4065 28.6222 25.7574 28.7345 25.0763C28.8469 24.3951 28.8144 23.6976 28.6392 23.0301L37.5768 13.9813L34.1832 10.5473H34.1808Z" />
							</svg>
							<span>Dashboard</span>
						</a>
					</Link>
				</div>
				<div className="icon-container">
					<Link href="/users">
						<a>
							<svg
								viewBox="0 0 50 34"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M32.8134 31.2449C32.9942 31.5006 33.1018 31.8044 33.1237 32.1212C33.1457 32.438 33.0812 32.7548 32.9376 33.0349C32.7957 33.3132 32.5842 33.5464 32.3254 33.7096C32.0667 33.8729 31.7704 33.9602 31.4679 33.9623H1.66006C1.35757 33.9602 1.06127 33.8729 0.802529 33.7096C0.543792 33.5464 0.332266 33.3132 0.190364 33.0349C0.046766 32.7548 -0.0177761 32.438 0.00420293 32.1212C0.0261819 31.8044 0.133784 31.5006 0.314563 31.2449C2.62898 27.797 5.9014 25.1703 9.69161 23.7182C7.4698 22.1805 5.78219 19.9384 4.87852 17.3237C3.97485 14.709 3.90314 11.8607 4.67401 9.20025C5.44487 6.53981 7.01735 4.20861 9.15873 2.55165C11.3001 0.894683 13.8966 0 16.564 0C19.2313 0 21.8278 0.894683 23.9692 2.55165C26.1106 4.20861 27.6831 6.53981 28.4539 9.20025C29.2248 11.8607 29.1531 14.709 28.2494 17.3237C27.3458 19.9384 25.6581 22.1805 23.4363 23.7182C27.2265 25.1703 30.499 27.797 32.8134 31.2449ZM49.7045 31.2449C47.3769 27.8012 44.0994 25.1762 40.3068 23.7182C42.5356 22.1863 44.2303 19.9458 45.1387 17.3298C46.047 14.7138 46.1206 11.8622 45.3485 9.19915C44.5763 6.5361 42.9996 4.20389 40.853 2.54945C38.7064 0.895005 36.1045 0.00672177 33.4344 0.0167344C32.2948 0.0230318 31.1607 0.182502 30.0603 0.491196C29.8018 0.572079 29.5656 0.716009 29.3712 0.911045C29.1768 1.10608 29.0298 1.3466 28.9425 1.61265C28.8592 1.87652 28.8383 2.15744 28.8815 2.43153C28.9248 2.70563 29.0309 2.96479 29.1909 3.187C31.063 5.80769 32.1386 8.95267 32.2788 12.2163C32.419 15.4799 31.6174 18.7124 29.9775 21.4969C29.7672 21.8669 29.6953 22.3047 29.7755 22.7265C29.8557 23.1482 30.0824 23.5244 30.4122 23.7829C31.0332 24.2861 31.6335 24.8037 32.2131 25.3357L32.3166 25.4435C34.5261 27.5737 36.3186 30.1297 37.5951 32.9702C37.7261 33.267 37.9362 33.5184 38.2004 33.6943C38.4647 33.8702 38.7719 33.9632 39.0855 33.9623H48.3383C48.6408 33.9602 48.9371 33.8729 49.1958 33.7096C49.4546 33.5464 49.6661 33.3132 49.808 33.0349C49.9499 32.7553 50.0153 32.4405 49.997 32.1248C49.9787 31.8091 49.8776 31.5047 49.7045 31.2449Z" />
							</svg>
							<span>Users</span>
						</a>
					</Link>
				</div>
				<div className="icon-container">
					<Link href="/vehicles">
						<a>
							<svg
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M21.0242 7.28061C20.5462 7.28061 20.0879 7.47237 19.7499 7.81372C19.412 8.15506 19.2221 8.61802 19.2221 9.10076C19.2221 9.58349 19.412 10.0465 19.7499 10.3878C20.0879 10.7291 20.5462 10.9209 21.0242 10.9209H27.0311C27.509 10.9209 27.9674 10.7291 28.3053 10.3878C28.6433 10.0465 28.8332 9.58349 28.8332 9.10076C28.8332 8.61802 28.6433 8.15506 28.3053 7.81372C27.9674 7.47237 27.509 7.28061 27.0311 7.28061H21.0242ZM4.80553 9.10076C4.80553 6.68709 5.75483 4.37227 7.4446 2.66555C9.13437 0.958827 11.4262 0 13.8159 0H34.2394C36.6291 0 38.9209 0.958827 40.6107 2.66555C42.3004 4.37227 43.2497 6.68709 43.2497 9.10076V18.2015H46.1979C46.6759 18.2015 47.1342 18.3933 47.4722 18.7346C47.8101 19.076 48 19.5389 48 20.0217C48 20.5044 47.8101 20.9674 47.4722 21.3087C47.1342 21.6501 46.6759 21.8418 46.1979 21.8418H43.2497V43.0769C43.2497 44.2033 42.8067 45.2835 42.0182 46.08C41.2296 46.8765 40.1601 47.3239 39.0449 47.3239H35.4408C34.3256 47.3239 33.2561 46.8765 32.4675 46.08C31.6789 45.2835 31.2359 44.2033 31.2359 43.0769V40.0433H16.8193V43.0769C16.8193 44.2033 16.3763 45.2835 15.5878 46.08C14.7992 46.8765 13.7297 47.3239 12.6145 47.3239H9.01036C7.89517 47.3239 6.82565 46.8765 6.0371 46.08C5.24854 45.2835 4.80553 44.2033 4.80553 43.0769V21.8418H1.80207C1.32413 21.8418 0.865769 21.6501 0.527815 21.3087C0.18986 20.9674 0 20.5044 0 20.0217C0 19.5389 0.18986 19.076 0.527815 18.7346C0.865769 18.3933 1.32413 18.2015 1.80207 18.2015H4.80553V9.10076ZM34.8401 40.0433V43.0769C34.8401 43.4118 35.1092 43.6836 35.4408 43.6836H39.0449C39.2042 43.6836 39.357 43.6197 39.4697 43.5059C39.5823 43.3922 39.6456 43.2378 39.6456 43.0769V40.0433H34.8401ZM8.40967 40.0433V43.0769C8.40967 43.4118 8.67878 43.6836 9.01036 43.6836H12.6145C12.7738 43.6836 12.9266 43.6197 13.0393 43.5059C13.1519 43.3922 13.2152 43.2378 13.2152 43.0769V40.0433H8.40967ZM13.8159 3.6403C12.3821 3.6403 11.007 4.2156 9.99312 5.23963C8.97925 6.26367 8.40967 7.65256 8.40967 9.10076V24.2687H39.6456V9.10076C39.6456 7.65256 39.076 6.26367 38.0621 5.23963C37.0483 4.2156 35.6732 3.6403 34.2394 3.6403H13.8159ZM16.8193 31.5493C16.8193 30.9057 16.5662 30.2884 16.1156 29.8332C15.665 29.3781 15.0538 29.1224 14.4166 29.1224C13.7793 29.1224 13.1682 29.3781 12.7176 29.8332C12.267 30.2884 12.0138 30.9057 12.0138 31.5493C12.0138 32.1929 12.267 32.8102 12.7176 33.2654C13.1682 33.7205 13.7793 33.9762 14.4166 33.9762C15.0538 33.9762 15.665 33.7205 16.1156 33.2654C16.5662 32.8102 16.8193 32.1929 16.8193 31.5493ZM33.6387 33.9762C34.2759 33.9762 34.8871 33.7205 35.3377 33.2654C35.7883 32.8102 36.0415 32.1929 36.0415 31.5493C36.0415 30.9057 35.7883 30.2884 35.3377 29.8332C34.8871 29.3781 34.2759 29.1224 33.6387 29.1224C33.0014 29.1224 32.3903 29.3781 31.9397 29.8332C31.4891 30.2884 31.2359 30.9057 31.2359 31.5493C31.2359 32.1929 31.4891 32.8102 31.9397 33.2654C32.3903 33.7205 33.0014 33.9762 33.6387 33.9762Z" />
							</svg>

							<span>Vehicles</span>
						</a>
					</Link>
				</div>
				<div className="icon-container">
					<Link href="/items">
						<a>
							<svg
								viewBox="0 0 48 43"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M32.0784 0L39.7848 13.3488H48V18.1488H45.1992L43.3824 39.948C43.3325 40.5477 43.059 41.1068 42.6163 41.5144C42.1735 41.9221 41.5938 42.1485 40.992 42.1488H7.008C6.40619 42.1485 5.82647 41.9221 5.38373 41.5144C4.94099 41.1068 4.66755 40.5477 4.6176 39.948L2.7984 18.1488H0V13.3488H8.2128L15.9216 0L20.0784 2.4L13.7568 13.3488H34.2408L27.9216 2.4L32.0784 0ZM26.4 22.9488H21.6V32.5488H26.4V22.9488ZM16.8 22.9488H12V32.5488H16.8V22.9488ZM36 22.9488H31.2V32.5488H36V22.9488Z" />
							</svg>

							<span>Items</span>
						</a>
					</Link>
				</div>
				<div className="icon-container">
					<Link href="/measures">
						<a>
							<svg
								viewBox="0 0 48 46"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M46.9593 12.1189L35.3251 0.979071C34.6601 0.351686 33.764 0 32.8305 0C31.8969 0 31.0009 0.351686 30.3359 0.979071L15.6773 14.9936L7.72983 22.6034L1.04074 29.0293C0.711007 29.3419 0.449254 29.7139 0.270616 30.1239C0.0919782 30.5339 0 30.9737 0 31.418C0 31.8622 0.0919782 32.302 0.270616 32.712C0.449254 33.122 0.711007 33.494 1.04074 33.8066L12.6749 44.9463C13.0013 45.2621 13.3898 45.5127 13.818 45.6837C14.2462 45.8548 14.7056 45.9429 15.1695 45.9429C15.6335 45.9429 16.0928 45.8548 16.521 45.6837C16.9492 45.5127 17.3377 45.2621 17.6641 44.9463L46.9593 16.8961C47.289 16.5835 47.5507 16.2115 47.7294 15.8015C47.908 15.3915 48 14.9517 48 14.5075C48 14.0632 47.908 13.6234 47.7294 13.2134C47.5507 12.8034 47.289 12.4314 46.9593 12.1189ZM44.4646 14.5075L15.1695 42.5577L3.53535 31.418L8.98817 26.1968L14.7942 31.7773C15.1318 32.0898 15.583 32.2646 16.0526 32.2646C16.5221 32.2646 16.9733 32.0898 17.3109 31.7773C17.6425 31.4567 17.8286 31.0237 17.8286 30.5724C17.8286 30.1212 17.6425 29.6882 17.3109 29.3676L11.4828 23.8082L16.9356 18.5871L22.7417 24.1676C23.0792 24.4801 23.5304 24.6548 24 24.6548C24.4696 24.6548 24.9208 24.4801 25.2583 24.1676C25.59 23.847 25.776 23.414 25.776 22.9627C25.776 22.5115 25.59 22.0784 25.2583 21.7578L19.4302 16.1985L24.883 10.9774L30.6891 16.5579C31.0267 16.8704 31.4779 17.0451 31.9474 17.0451C32.417 17.0451 32.8682 16.8704 33.2058 16.5579C33.5374 16.2372 33.7235 15.8042 33.7235 15.353C33.7235 14.9017 33.5374 14.4687 33.2058 14.1481L27.3777 8.58879L32.8305 3.36768L44.4646 14.5075Z" />
							</svg>

							<span>Measures</span>
						</a>
					</Link>
				</div>
				<div className="icon-container">
					<Link href="/inventory">
						<a>
							<svg
								viewBox="0 0 50 50"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M7.5 50C6.125 50 4.9475 49.5108 3.9675 48.5325C2.98917 47.5525 2.5 46.375 2.5 45V16.75C1.79167 16.2917 1.19833 15.7083 0.72 15C0.24 14.2917 0 13.4583 0 12.5V5C0 3.625 0.49 2.4475 1.47 1.4675C2.44833 0.489166 3.625 0 5 0H45C46.375 0 47.5525 0.489166 48.5325 1.4675C49.5108 2.4475 50 3.625 50 5V12.5C50 13.4583 49.76 14.2917 49.28 15C48.8017 15.7083 48.2083 16.2917 47.5 16.75V45C47.5 46.375 47.0108 47.5525 46.0325 48.5325C45.0525 49.5108 43.875 50 42.5 50H7.5ZM45 12.5V5H5V12.5H45ZM20 30H30C30.7083 30 31.3025 29.76 31.7825 29.28C32.2608 28.8017 32.5 28.2083 32.5 27.5C32.5 26.7917 32.2608 26.1975 31.7825 25.7175C31.3025 25.2392 30.7083 25 30 25H20C19.2917 25 18.6983 25.2392 18.22 25.7175C17.74 26.1975 17.5 26.7917 17.5 27.5C17.5 28.2083 17.74 28.8017 18.22 29.28C18.6983 29.76 19.2917 30 20 30Z" />
							</svg>

							<span>Inventory</span>
						</a>
					</Link>
				</div>
				<div className="icon-container">
					<Link href="/reports">
						<a>
							<svg
								viewBox="0 0 50 59"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M11.0803 27.7008H33.241V33.241H11.0803V27.7008ZM16.6205 49.8615H5.54017V5.54017H24.9307V19.3906H38.7812V27.9778L44.3213 22.4377V16.6205L27.7008 0H5.54017C4.07082 0 2.66166 0.583694 1.62268 1.62268C0.583694 2.66166 0 4.07082 0 5.54017V49.8615C0 51.3308 0.583694 52.74 1.62268 53.779C2.66166 54.818 4.07082 55.4017 5.54017 55.4017H16.6205V49.8615ZM11.0803 44.3213H22.4377L24.9307 41.8283V38.7812H11.0803V44.3213ZM44.8754 30.4709C45.1524 30.4709 45.7064 30.7479 45.9834 31.0249L49.5845 34.626C50.1385 35.1801 50.1385 36.2881 49.5845 36.8421L46.8144 39.6122L40.9972 33.795L43.7673 31.0249C44.0443 30.7479 44.3213 30.4709 44.8754 30.4709ZM44.8754 41.2742L27.9778 58.1717H22.1607V52.3546L39.0582 35.4571L44.8754 41.2742Z" />
							</svg>

							<span>Reports</span>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}

export default NavBar;