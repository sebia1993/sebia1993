# sebia1993 | 네트워크 자동화 포트폴리오

반복적인 네트워크 운영 업무를 **안전하게 자동화하고, 결과를 비전공자도 이해할 수 있는 화면과 근거로 바꾸는 엔지니어**입니다.

Python과 C#으로 Windows 운영 도구를 만들며, 장비 접속부터 입력 검증, 실패 격리, 결과 무결성, 패키징, CI/CD까지 한 흐름으로 설계합니다. 연락은 공개 이메일 대신 [GitHub 프로필](https://github.com/sebia1993)을 이용해 주세요.

## 30초 요약

| 관점 | 제가 보여드리는 것 |
|---|---|
| 업무 문제 | 반복 접속, 수작업 비교, 장애 오인, 불완전한 기록을 자동화로 줄임 |
| 안전 설계 | 잘못된 장비·바뀐 SSH 지문·위험한 명령·불완전한 출력에서는 멈추는 fail-closed 원칙 |
| 사용자 경험 | 네트워크 CLI를 몰라도 상태, 위험도, 성공·실패 이유를 이해할 수 있는 Windows UI와 보고서 |
| 품질 증거 | 단위·통합·합성 부하 테스트, Windows CI, 배포 ZIP, SHA-256, SBOM |
| 증거 원칙 | 실제 현장 검증과 자동 테스트를 구분하며, 공개할 수 없는 업무 성과 수치는 만들지 않음 |

## 대표 프로젝트

| 프로젝트 | 한 문장 설명 | 핵심 역량 |
|---|---|---|
| [Multi-target Ping Monitor](https://github.com/sebia1993/multi-target-ping-monitor) | 최대 50개 대상의 지연·손실을 실시간 관측하고 장시간 세션을 복구·분석 | 실시간 관측, 장시간 안정성, Windows GUI |
| [Aruba Cluster Health Dashboard](https://github.com/sebia1993/aruba-cluster-health-dashboard) | 여러 무선 장비 관측값을 연결해 장애와 수집 실패를 구분 | 상관분석, 상태 모델, 오탐 억제 |
| [Internal Network Transfer Diagnostics](https://github.com/sebia1993/internal-network-transfer-diagnostics) | 폐쇄망 파일 전달과 HTTP/TCP 처리량 측정을 하나의 도구로 통합 | 네트워크 진단, 저장 무결성, 장애 복구 |
| [HPE Comware Change Validator](https://github.com/sebia1993/hpe-comware-change-validator) | 작업 전·후 장비 상태를 비교해 링크·라우팅·이중화 위험을 분류 | 변경 검증, 읽기 전용 수집, 위험도 설명 |
| [Aruba 2930F Config Backup](https://github.com/sebia1993/aruba-2930f-config-backup) | 여러 스위치 설정을 안전하게 백업하고 SHA-256·Excel 결과를 생성 | SSH 안전성, 장비 식별, 결과 무결성 |
| [Samsung IES Switch Watch](https://github.com/sebia1993/samsung-ies-switch-watch) | Agent가 수집한 스위치 상태를 Viewer에서 중앙 확인 | C#/.NET, Agent 구조, 인증·인증서 고정 |

## 안전한 상태 변경 자동화

읽기 전용 수집과 실제 상태 변경은 같은 방식으로 다루지 않습니다.

- [Aruba MM Session Cleanup](https://github.com/sebia1993/aruba-mm-session-cleanup): 삭제 대상을 최초 조회로 고정하고 승인·재시도·사후 검증을 통제합니다.
- [Aruba Wireless Policy Mapper](https://github.com/sebia1993/aruba-wireless-policy-mapper): Alias·Role·ACL 관계와 변경 영향을 설명하며 SSH와 Telnet의 보안 경계를 명시합니다.

## 검증 결과를 읽는 방법

각 저장소는 README 첫 화면에서 다음을 분리해 설명합니다.

1. 해결하려 한 운영 문제와 설계 판단
2. 자동 테스트·가짜 장비·합성 부하 시험으로 확인한 범위
3. 실제 장비 또는 실제 업무 성과로 아직 확인하지 못한 범위
4. Windows 배포물의 해시와 SBOM, 서명되지 않은 실행 파일의 한계

이 구분은 테스트 통과를 현장 적용 성과로 과장하지 않기 위한 포트폴리오 원칙입니다.
