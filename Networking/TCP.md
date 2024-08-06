# TCP (Transmission Control Protocol)

TCP(Transmission Control Protocol)는 애플리케이션 사이에서 데이터를 안전하게 통신하는 규약입니다. 다양한 경로로 데이터를 주고받으며 통신 속도를 높이지만 안정성을 보장하기 위해 탄생했습니다. 보통 IP(Internet Protocol)와 함께 TCP/IP로 표현됩니다.

## TCP 통신 과정
1. 데이터를 일정 단위로 분할
2. TCP 세그먼트 생성
3. IP 데이터그램으로 변환
4. 수신 애플리케이션에 전송

## TCP 세그먼트
헤더와 데이터 필드로 구성:
- Source Port: 발송 포트 번호
- Destination Port: 수신 포트 번호
- Sequence Number: 데이터 순서
- Acknowledgment Number: 다음 수신할 데이터의 순서

## TCP Handshake
안정적인 연결을 위한 3-Way Handshake:
1. 클라이언트가 SYN 전송
2. 서버가 SYN-ACK로 응답
3. 클라이언트가 ACK 전송


<!-- 참고 링크 -->
<!-- https://docs.tosspayments.com/resources/glossary/tcp -->
