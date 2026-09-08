# sebia1993 | 네트워크 자동화 포트폴리오

반복적인 네트워크 운영 업무를 **안전하게 자동화하고, 결과를 비전공자도 이해할 수 있는 화면과 근거로 바꾸는 엔지니어**입니다.

Python과 C#으로 Windows 운영 도구를 만들며, 장비 접속부터 입력 검증, 실패 격리, 결과 무결성, 패키징, CI/CD까지 한 흐름으로 설계합니다. 연락은 공개 이메일 대신 [GitHub 프로필](https://github.com/sebia1993)을 이용해 주세요.

**처음 방문하셨다면:** 아래 대표 프로젝트에서 관심 있는 운영 문제를 선택한 뒤, [기술 검토 가이드](PORTFOLIO_GUIDE_KO.md)에서 설계·코드·검증 근거를 확인할 수 있습니다. 공개 프로젝트 11개를 다루며, 실제 장비 검증 여부는 프로젝트별로 구분합니다.

## 30초 요약

| 관점 | 제가 보여드리는 것 |
|---|---|
| 업무 문제 | 반복 접속, 수작업 비교, 장애 오인, 불완전한 기록을 자동화로 줄임 |
| 안전 설계 | 잘못된 장비·바뀐 SSH 지문·위험한 명령·불완전한 출력에서는 멈추는 fail-closed 원칙 |
| 사용자 경험 | 네트워크 CLI를 몰라도 상태, 위험도, 성공·실패 이유를 이해할 수 있는 Windows UI와 보고서 |
| 품질 증거 | 프로젝트별 단위·통합·합성 부하 테스트와 Windows CI; 배포물별 ZIP·SHA-256·SBOM 제공 여부 확인 |
| 증거 원칙 | 실제 현장 검증과 자동 테스트를 구분하며, 공개할 수 없는 업무 성과 수치는 만들지 않음 |

## 실제 화면과 사용 흐름

**2026-09-08 확인한 현재 앱 화면**입니다. 측정 전 상태 또는 문서용 합성 데이터를 실제 앱에서 렌더했으며, 회사 네트워크 관측값이나 현장 성과를 뜻하지 않습니다. 이미지를 누르면 단계별 행동·읽을 값·다음 점검으로 이어집니다.

| WLAN 진단 | 세션 조사 | 다중 Ping 관측 |
|---|---|---|
| [<img src="https://raw.githubusercontent.com/sebia1993/wlan-live-path-tester-ko/2e51d811f7b8731e4238e5bd19658c34598eaf58/docs/images/usage/01-guided-step.png" width="300" alt="WLAN 진단: 측정 전 실제 WPF 화면">](https://github.com/sebia1993/wlan-live-path-tester-ko/blob/main/docs/USAGE_SCREENSHOTS_KO.md) | [<img src="https://raw.githubusercontent.com/sebia1993/aruba-session-tracker-1/6670dcbdb19eab6688087528f7847f5326da7e19/docs/images/session-query.png" width="300" alt="세션 조사: 합성 4행과 실제 Qt 상세 화면">](https://github.com/sebia1993/aruba-session-tracker-1/blob/main/docs/USAGE_SCREENSHOTS_KO.md) | [<img src="https://raw.githubusercontent.com/sebia1993/multi-target-ping-monitor/740943504b460210d175769c8a7a360867320e27/docs/images/multiping-main.png" width="300" alt="다중 Ping: 합성 지연과 손실을 표시한 실제 Qt 그래프">](https://github.com/sebia1993/multi-target-ping-monitor/blob/main/docs/USAGE_SCREENSHOTS_KO.md) |
| 미실행을 구분하는 WPF 시작 화면 | 합성 결과와 선택 행의 NOC 상세 | 합성 지연·손실의 대상별 비교 |

11개 앱의 화면 안내에는 캡처 출처·버전·합성 여부·재현 방법과 검증 한계를 함께 기록합니다. 대표 이미지는 확인한 커밋의 원본 PNG에 고정했으며, 아래 링크는 각 저장소의 최신 사용 안내로 연결됩니다.

| 앱 | 화면으로 확인할 흐름 |
|---|---|
| [WLAN Live Path Tester KO](https://github.com/sebia1993/wlan-live-path-tester-ko/blob/main/docs/USAGE_SCREENSHOTS_KO.md) | 무선 연결 → IP·경로 → 프록시 → 성능 → 결과·보고서 |
| [WLAN Troubleshooter KO](https://github.com/sebia1993/wlan-troubleshooter-ko/blob/main/docs/USAGE_SCREENSHOTS_KO.md) | 캡처 선택 → 관측 가능 범위 → 분석 근거·판단 한계 |
| [Aruba Session Tracker](https://github.com/sebia1993/aruba-session-tracker-1/blob/main/docs/USAGE_SCREENSHOTS_KO.md) | 장비 범위 → 세션 결과·상세 → 기록 → HTML 조사 보고서 |
| [Aruba Cluster Health Dashboard](https://github.com/sebia1993/aruba-cluster-health-dashboard/blob/main/docs/USAGE_SCREENSHOTS_KO.md) | 등록 범위 → 상태 개요 → 복수 이상 → 장애 필터 |
| [Multi-target Ping Monitor](https://github.com/sebia1993/multi-target-ping-monitor/blob/main/docs/USAGE_SCREENSHOTS_KO.md) | 대상 입력 → 지연·손실 비교; 저장·내보내기는 개발 검증 부록 |
| [HPE Comware Change Validator](https://github.com/sebia1993/hpe-comware-change-validator/blob/main/docs/USAGE_SCREENSHOTS_KO.md) | 기준 수집 → 비교 조건 → 선택한 변경 근거 → 작업 기록 |
| [Aruba 2930F Config Backup](https://github.com/sebia1993/aruba-2930f-config-backup/blob/main/docs/USAGE_SCREENSHOTS_KO.md) | 백업 범위 → SSH 지문 확인 → 완료·재시도 → 혼합 결과 |
| [Samsung IES Switch Watch](https://github.com/sebia1993/samsung-ies-switch-watch/blob/main/docs/USAGE_SCREENSHOTS_KO.md) | Agent 설정 → Viewer 페어링 → 상태 → 명령 근거 |
| [Aruba Wireless Policy Mapper](https://github.com/sebia1993/aruba-wireless-policy-mapper/blob/main/docs/USAGE_SCREENSHOTS_KO.md) | 분석 설정 → 수집 단계 → 완전성 확인 → 산출물 |
| [Aruba MM Session Cleanup](https://github.com/sebia1993/aruba-mm-session-cleanup/blob/main/docs/USAGE_SCREENSHOTS_KO.md) | 정리 범위 → 조회 snapshot → 최종 승인 → 사후 검증 |
| [Internal Network Transfer Diagnostics](https://github.com/sebia1993/internal-network-transfer-diagnostics/blob/main/docs/USAGE_SCREENSHOTS_KO.md) | 전송 설정 → 파일 선택 → 측정 → 저장 결과 |

화면에 표시된 `정상`, `완료`, `현재 관측됨`은 프로젝트마다 뜻이 다릅니다. 수집 상태·세션 관측·통신 성공을 구분하고, 그래프의 합성 예시를 실제 장애 해결 수치로 인용하지 않습니다.

## 대표 프로젝트

| 프로젝트 | 한 문장 설명 | 핵심 역량 |
|---|---|---|
| [Multi-target Ping Monitor](https://github.com/sebia1993/multi-target-ping-monitor) | 최대 50개 대상의 지연·손실을 실시간 관측하고 관측 결과를 CSV로 기록 | 실시간 관측, 장시간 안정성, Windows GUI |
| [Aruba Cluster Health Dashboard](https://github.com/sebia1993/aruba-cluster-health-dashboard) | 여러 무선 장비 관측값을 연결해 장애와 수집 실패를 구분 | 상관분석, 상태 모델, 오탐 억제 |
| [Internal Network Transfer Diagnostics](https://github.com/sebia1993/internal-network-transfer-diagnostics) | 폐쇄망 파일 전달과 HTTP/TCP 처리량 측정을 하나의 도구로 통합 | 네트워크 진단, 저장 무결성, 장애 복구 |
| [HPE Comware Change Validator](https://github.com/sebia1993/hpe-comware-change-validator) | 작업 전·후 장비 상태를 비교해 링크·라우팅·이중화 위험을 분류 | 변경 검증, 읽기 전용 수집, 위험도 설명 |
| [Aruba 2930F Config Backup](https://github.com/sebia1993/aruba-2930f-config-backup) | 여러 스위치 설정을 안전하게 백업하고 SHA-256·Excel 결과를 생성 | SSH 안전성, 장비 식별, 결과 무결성 |
| [Samsung IES Switch Watch](https://github.com/sebia1993/samsung-ies-switch-watch) | Agent가 수집한 스위치 상태를 Viewer에서 중앙 확인 | C#/.NET, Agent 구조, 인증·인증서 고정 |

## 안전한 상태 변경 자동화

읽기 전용 수집과 실제 상태 변경은 같은 방식으로 다루지 않습니다.

- [Aruba MM Session Cleanup](https://github.com/sebia1993/aruba-mm-session-cleanup): 삭제 대상을 최초 조회로 고정하고 승인·재시도·사후 검증을 통제합니다.

## 무선 네트워크 진단과 정책 분석

| 프로젝트 | 확인하려는 운영 문제 | 기술 검토 포인트 |
|---|---|---|
| [Aruba Wireless Policy Mapper](https://github.com/sebia1993/aruba-wireless-policy-mapper) | 무선 정책에서 Alias·Role·ACL 관계와 참조 누락 파악 | 읽기 전용 수집, 정책 파싱, SSH·Telnet 보안 경계 |
| [Aruba Session Tracker](https://github.com/sebia1993/aruba-session-tracker-1) | 활성 MD에서 IP·포트·Flags 조건에 맞는 datapath 세션 추적 | 장비 탐색, 세션 필터, 이력 저장과 보고서 |
| [WLAN Live Path Tester KO](https://github.com/sebia1993/wlan-live-path-tester-ko) | Windows 무선 연결에서 DNS·TCP·HTTP 및 프록시 경로 관측 | 측정 경계, 취소·종료 처리, 무선 상태와 경로 결과 연결; 사전 공개 단계 |
| [WLAN Troubleshooter KO](https://github.com/sebia1993/wlan-troubleshooter-ko) | 외부 통신 없이 PCAP/PCAPNG의 장애 근거 정리 | 결정적 규칙, 수집 범위에 따른 판단 제한; 프로토콜 상관분석 정확도 추가 검증 필요 |

## 검증 결과를 읽는 방법

각 저장소의 README와 연결된 검증 문서에서 다음을 확인할 수 있습니다.

1. 해결하려 한 운영 문제와 설계 판단
2. 자동 테스트·가짜 장비·합성 부하 시험으로 확인한 범위
3. 실제 장비 또는 실제 업무 성과로 아직 확인하지 못한 범위
4. Windows 배포물의 해시와 SBOM, 서명되지 않은 실행 파일의 한계

이 구분은 테스트 통과를 현장 적용 성과로 과장하지 않기 위한 포트폴리오 원칙입니다.

`main`의 코드, PR에서 검증한 코드, 내려받는 릴리스는 서로 다른 버전일 수 있습니다. Actions의 커밋 SHA와 릴리스 태그를 함께 확인하고, 시험용 데이터로 재현한 결과를 실제 장애 해결 실적으로 표현하지 않습니다.
