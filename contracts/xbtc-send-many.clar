;; send-many

;; send stx to single recipient
(define-public (send-stx-with-memo (ustx uint) (to principal) (memo (buff 34)))
	(let ((transfer-ok (try! (stx-transfer? ustx tx-sender to))))
		(print memo)
		(ok transfer-ok)))

;; swap xbtc to stx and send stx for single recipient
;; xbtc amount in wrapped sats
;; to the recipient
;; memo the message to the recipient 
;; min-dy expected minimum ustx when sapping xbtc
(define-public (swap-xbtc-send-stx-with-memo (xbtc uint) (to principal) (memo
(buff 34)) (min-dy (optional uint)))
	(let ((ustx-result
				(contract-call?
					'SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.swap-helper-v1-01 swap-helper
					'SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-wbtc
					'SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-wstx
					xbtc
					min-dy)))
		(match ustx-result
			ustx (send-stx-with-memo ustx to memo)
			error (err error))))

;; send xsat to single
(define-public (send-xbtc-with-memo (xsat uint) (to principal) (memo (buff 34)))
	(contract-call?
		'SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin
		transfer xsat tx-sender to (some memo)))

(define-private (send-xbtc (recipient {to: principal, xbtc-in-sats: uint, memo: (buff
34), swap-to-ustx: bool, min-dy: (optional uint)}))
	(if (get swap-to-ustx recipient)
		(swap-xbtc-send-stx-with-memo
			(get xbtc-in-sats recipient)
			(get to recipient)
			(get memo recipient)
			(get min-dy recipient))
		(send-xbtc-with-memo
			(get xbtc-in-sats recipient)
			(get to recipient)
			(get memo recipient))))

(define-private (check-err (result (response bool uint)) (prior (response bool uint)))
	(match prior 
	  ok-value result               
	  err-value (err err-value)))
        
;; send xbtc to many recipients 
;; depending on their preference xbtc is swapped to stx via alex swap
(define-public (send-many (recipients (list 200 {to: principal, xbtc-in-sats: uint,
memo: (buff 34), swap-to-ustx: bool, min-dy: (optional uint)})))
	(fold check-err
		(map send-xbtc recipients)
		(ok true)))