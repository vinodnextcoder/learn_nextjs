"use client"
// Filename: index.js 
// @ts-nocheck
import { useState, useRef, useEffect } from "react"; 


export default function Home() { 
	const [loanAmount, setLoanAmount] = useState(100000); 
	const [interestRate, setInterestRate] = useState(9); 
	
	// Default value of 12 months 
	const [loanTenure, setLoanTenure] = useState(12); 
	const [loanEMI, setLoanEMI] = useState(0); 
	const [totalInterest, setTotalInterest] = useState(0); 
	const [totalAmount, setTotalAmount] = useState(0); 

	const inputRefs :any = { 
		loanAmount: useRef(), 
		interestRate: useRef(), 
		loanTenure: useRef(), 
	}; 

	useEffect(() => { 
		calculateEMI(); 
	}, []); 

	const handleInputChange = (e:any) => { 
		const { name, value } = e.target; 
		if ( 
			name === "loanAmount" || 
			name === "loanTenure" || 
			name === "interestRate"
		) { 
			if (name === "loanTenure") { 
				setLoanTenure(parseInt(value) || 0); 
			} else if (name === "loanAmount") { 
				setLoanAmount(parseFloat(value) || 0); 
			} else if (name === "interestRate") { 
				setInterestRate(parseFloat(value) || 0); 
			} 
		} 
	}; 

	const calculateEMI = () => { 
		const emi = 
			loanAmount * 
			(interestRate / 12 / 100) * 
			(Math.pow( 
				1 + interestRate / 12 / 100, 
				loanTenure 
			) / 
				(Math.pow( 
					1 + interestRate / 12 / 100, 
					loanTenure 
				) - 
					1)); 

		setLoanEMI(emi); 
		setTotalAmount(Math.round(loanTenure * emi)); 
		setTotalInterest( 
			Math.round(loanTenure * emi) - loanAmount 
		); 

		updateData(); 
	}; 

	const updateData = () => { 
		Object.keys(inputRefs).forEach((key) => { 
			inputRefs[key].current.value = parseFloat( 
				inputRefs[key].current.value || 0 
			).toFixed(2); 
		}); 

		inputRefs.loanAmount.current.value = 
			loanAmount.toFixed(2); 
		inputRefs.interestRate.current.value = 
			interestRate.toFixed(2); 
		inputRefs.loanTenure.current.value = loanTenure; 
	}; 

	const handleCalculate = () => { 
		calculateEMI(); 
	}; 

	return ( 
		<div className="loanCalculator"> 
			<div className="top"> 
				<h1 className="heading"> 
					Geeksforgeeks 
				</h1> 
				<h3>Loan Calculator</h3> 
				<form action="#"> 
					{Object.entries(inputRefs).map( 
						([key, ref]) => ( 
							<div 
								key={key} 
								className="subContainer"
							> 
								<div 
									className="title" 
								> 
									{key.replace( 
										/^\w/, 
										(c) => 
											c.toUpperCase() 
									)} 
								</div> 
								<input 
									type="text"
									name={key} 
									defaultValue={ 
										key === 
											"interestRate"
											? interestRate 
											: key === 
												"loanTenure"
												? loanTenure 
												: loanAmount 
									} 
									className={styles[key]} 
									ref={ref} 
									onChange={ 
										handleInputChange 
									} 
								/> 
							</div> 
						) 
					)} 
				</form> 
				<button 
					className="btn" 
					onClick={handleCalculate} 
				> 
					Calculate 
				</button> 
			</div> 
			<div className="finalResult"> 
				<div className="styles.left"> 
					<div className="loanEMI"> 
						<h3>Loan EMI</h3> 
						<div className="value"> 
							{Math.round(loanEMI)} 
						</div> 
					</div> 
					<div className="totalInterest"> 
						<h3>Total Interest Payable</h3> 
						<div className="value"> 
							{totalInterest} 
						</div> 
					</div> 
					<div className="totalAmount"> 
						<h3>Total Amount</h3> 
						<div className="value"> 
							{totalAmount} 
						</div> 
					</div> 
				</div> 
			</div> 
		</div> 
	); 
}
