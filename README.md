# 현상일 | Wireless Network Operations Engineer

대규모 Enterprise WLAN/NAC를 직접 운영하고, 장애를 1차 판단·복구·검증하며 반복 운영을 자동화로 개선합니다.

- 3개 사업장 WLAN/NAC 직접 운영
- 최대 2.5K+ AP / 250+ Access Switch 규모의 Enterprise Campus 경험
- Aruba WLAN · ClearPass · Campus Switching · Troubleshooting
- 반복 CLI 조회·상태 비교·보고를 Network Automation으로 개선

[🌐 웹 이력서](https://sebia1993.github.io) · [🛠 프로젝트 상세](https://sebia1993.github.io/projects.html) · [🔍 장애분석 방식](https://sebia1993.github.io/troubleshooting.html) · [📚 학습 로드맵](https://sebia1993.github.io/roadmap.html)

---

## 30초 요약

| 구분 | 내용 |
|---|---|
| 현재 역할 | Wireless Network Operations Engineer |
| 주력 영역 | Aruba WLAN, ClearPass, Enterprise Campus 운영 |
| 운영 범위 | 모니터링 → 분석 → 설정 변경 → 복구 → 검증 → 근거 기반 이관 |
| 차별점 | 반복 네트워크 운영 절차를 자동 수집·분석·HTML 보고 방식으로 개선 |
| 작업 방식 | 문제 정의, 수집 항목·판정 기준·검증 시나리오를 직접 정하고 실제 환경에서 확인 |

## 대표 프로젝트

네트워크 운영·장애분석·Campus 변경검증 역량이 먼저 보이도록 대표 프로젝트를 선별했습니다.

| 프로젝트 | 해결하려는 운영 문제 | 보여주는 역량 |
|---|---|---|
| [Aruba Cluster Health Dashboard](https://github.com/sebia1993/aruba-cluster-health-dashboard) | 여러 Controller의 상태와 Client 분배를 반복 확인하는 점검 절차 통합 | Enterprise WLAN, 상태 모델링, 오탐 억제, 운영 자동화 |
| [WLAN Troubleshooter KO](https://github.com/sebia1993/wlan-troubleshooter-ko) | PCAP/PCAPNG에서 무선→인증→DHCP→DNS→TCP 장애 근거 정리 | Packet Analysis, 802.11/EAPOL/RADIUS, 판단 경계 |
| [HPE Comware Change Validator](https://github.com/sebia1993/hpe-comware-change-validator) | 작업 전·후 L2/L3 상태를 수작업으로 비교하는 절차 개선 | Campus Network, STP/LACP/VLAN, 변경 검증 |
| [Aruba Session Tracker](https://github.com/sebia1993/aruba-session-tracker-1) | MM 하위 Controller에서 조건에 맞는 datapath session 추적 | 세션 분석, 장비 탐색, 운영 보고서 |
| [Aruba 2930F Config Backup](https://github.com/sebia1993/aruba-2930f-config-backup) | 다수 Access Switch 설정 백업과 결과 검증 | Aruba/HPE Switching, SSH, 백업 무결성 |
| [WLAN Live Path Tester KO](https://github.com/sebia1993/wlan-live-path-tester-ko) | Windows 단말에서 WLAN 이후 IP·경로·서비스 구간을 단계적으로 확인 | End-to-End Troubleshooting, DNS/TCP/HTTP, 사용자 경로 분석 |

### 기술 스택

`Aruba WLAN` · `Controller / MM` · `ClearPass` · `802.1X` · `RADIUS` · `VLAN` · `Trunk` · `STP` · `LACP` · `Wireshark` · `DHCP` · `DNS` · `ARP` · `TCP/IP` · `Python` · `C#` · `SSH` · `Git`

<details>
<summary><strong>추가 네트워크 운영 프로젝트 보기</strong></summary>

| 프로젝트 | 목적 |
|---|---|
| [Aruba Wireless Policy Mapper](https://github.com/sebia1993/aruba-wireless-policy-mapper) | Alias·Role·ACL 관계와 참조 상태 분석 |
| [Aruba MM Session Cleanup](https://github.com/sebia1993/aruba-mm-session-cleanup) | 세션 정리 대상 고정, 승인, 재시도, 사후 검증을 포함한 안전한 상태 변경 |
| [Multi-target Ping Monitor](https://github.com/sebia1993/multi-target-ping-monitor) | 다수 대상의 지연·손실 실시간 관측과 기록 |
| [Samsung IES Switch Watch](https://github.com/sebia1993/samsung-ies-switch-watch) | 스위치 상태를 Agent/Viewer 구조로 중앙 확인 |
| [Internal Network Transfer Diagnostics](https://github.com/sebia1993/internal-network-transfer-diagnostics) | 사내망 파일 전달과 HTTP/TCP 처리량 진단 |

</details>

## 안전한 상태 변경 자동화

읽기 전용 수집과 실제 장비 상태를 변경하는 자동화는 같은 기준으로 다루지 않습니다.

- [Aruba MM Session Cleanup](https://github.com/sebia1993/aruba-mm-session-cleanup): 삭제 대상을 최초 조회 결과로 고정하고, 승인·재시도·사후 검증 절차를 분리합니다.
- 운영 자동화는 빠른 실행보다 **대상 식별, 입력 검증, 실패 격리, 결과 검증**을 우선합니다.

## 무선 네트워크 진단과 정책 분석

- [Aruba Wireless Policy Mapper](https://github.com/sebia1993/aruba-wireless-policy-mapper): Role·ACL·Alias 관계와 참조 누락을 읽기 전용으로 분석합니다.
- [WLAN Troubleshooter KO](https://github.com/sebia1993/wlan-troubleshooter-ko): 관찰된 명시적 실패와 단순 미관찰을 구분해 과도한 장애 단정을 피합니다.
- [WLAN Live Path Tester KO](https://github.com/sebia1993/wlan-live-path-tester-ko): 단말의 무선 연결 이후 IP·DNS·TCP·HTTP 경로를 단계적으로 확인합니다.

## 검증 결과를 읽는 방법

프로젝트의 자동 테스트, 합성 데이터, 실제 환경 검증은 서로 구분합니다. 테스트 통과를 실제 현장 성과로 표현하지 않고, 공개할 수 없는 운영 수치를 임의로 만들지 않습니다.

<details>
<summary><strong>검증 원칙과 전체 프로젝트 확인</strong></summary>

- 실제 장비 또는 운영환경에서 확인한 범위와 자동 테스트로 확인한 범위를 구분합니다.
- 합성 데이터와 예시 화면을 실제 장애 해결 실적으로 표현하지 않습니다.
- 상태 변경 기능은 가능한 경우 승인·사후 검증·실패 시 중단 원칙을 적용합니다.
- 상세 설계와 검증 근거는 각 저장소 README 및 [기술 검토 가이드](PORTFOLIO_GUIDE_KO.md)에서 확인할 수 있습니다.

전체 네트워크 관련 공개 프로젝트:

- [Multi-target Ping Monitor](https://github.com/sebia1993/multi-target-ping-monitor)
- [Aruba Cluster Health Dashboard](https://github.com/sebia1993/aruba-cluster-health-dashboard)
- [Internal Network Transfer Diagnostics](https://github.com/sebia1993/internal-network-transfer-diagnostics)
- [HPE Comware Change Validator](https://github.com/sebia1993/hpe-comware-change-validator)
- [Aruba 2930F Config Backup](https://github.com/sebia1993/aruba-2930f-config-backup)
- [Samsung IES Switch Watch](https://github.com/sebia1993/samsung-ies-switch-watch)
- [Aruba MM Session Cleanup](https://github.com/sebia1993/aruba-mm-session-cleanup)
- [Aruba Wireless Policy Mapper](https://github.com/sebia1993/aruba-wireless-policy-mapper)
- [Aruba Session Tracker](https://github.com/sebia1993/aruba-session-tracker-1)
- [WLAN Live Path Tester KO](https://github.com/sebia1993/wlan-live-path-tester-ko)
- [WLAN Troubleshooter KO](https://github.com/sebia1993/wlan-troubleshooter-ko)

</details>
