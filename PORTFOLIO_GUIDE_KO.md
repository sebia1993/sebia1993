# 네트워크 엔지니어 포트폴리오 기술 검토 가이드

[프로필로 돌아가기](README.md)

이 문서는 공개 저장소에서 확인할 수 있는 구현을 네트워크 운영 업무와 연결합니다. 회사명, 운영 규모, 장애 감소율과 같은 확인되지 않은 경력·성과를 전제하지 않습니다.

## 5분 검토 순서

1. 아래 표에서 관심 있는 운영 문제 하나를 선택합니다.
2. 해당 저장소 README의 실행·재현 안내와 설계 문서를 읽습니다.
3. 처리 실패나 관측 누락을 다루는 코드와 테스트를 함께 확인합니다.
4. GitHub Actions에서 검토하는 커밋의 Windows 작업이 성공했는지 확인합니다.
5. 실제 실행 파일을 평가한다면 Releases의 태그·자산·체크섬을 확인합니다. 테스트의 성공만으로 그 파일의 검증을 대신하지 않습니다.

## 공개 프로젝트와 검토 근거

| 운영 문제 | 프로젝트 | 먼저 읽을 근거 | 확인할 설계 판단 |
|---|---|---|---|
| 변경 전후 링크·라우팅·이중화 비교 | [HPE Comware Change Validator](https://github.com/sebia1993/hpe-comware-change-validator) | [판정 로직](https://github.com/sebia1993/hpe-comware-change-validator/blob/main/docs/CHANGE_VALIDATION_LOGIC.md) | 정상·변화·수집 실패를 어떻게 구분하는가 |
| 다수 스위치 설정 백업 | [Aruba 2930F Config Backup](https://github.com/sebia1993/aruba-2930f-config-backup) | [SSH와 안전 설계](https://github.com/sebia1993/aruba-2930f-config-backup/blob/main/docs/SSH_AND_SAFETY.md) | 잘못된 장비·SSH 지문 변경·불완전한 출력을 어떻게 차단하는가 |
| 무선 클러스터 상태 관측 | [Aruba Cluster Health Dashboard](https://github.com/sebia1993/aruba-cluster-health-dashboard) | [탐지 로직](https://github.com/sebia1993/aruba-cluster-health-dashboard/blob/main/docs/DETECTION_LOGIC_KO.md) | 연결 상태와 진단 근거의 신뢰도를 어떻게 나누는가 |
| 지연·손실의 시간 흐름 기록 | [Multi-target Ping Monitor](https://github.com/sebia1993/multi-target-ping-monitor) | [관측 로직](https://github.com/sebia1993/multi-target-ping-monitor/blob/main/docs/OBSERVABILITY_LOGIC.md) | ICMP 결과로 설명할 수 있는 범위와 한계는 무엇인가 |
| 파일 전달과 전송 진단 | [Internal Network Transfer Diagnostics](https://github.com/sebia1993/internal-network-transfer-diagnostics) | [측정 모델](https://github.com/sebia1993/internal-network-transfer-diagnostics/blob/main/docs/MEASUREMENT_MODEL.md) | 애플리케이션 처리량과 회선 속도, 저장 실패를 어떻게 구분하는가 |
| 스위치의 Agent·Viewer 관측 | [Samsung IES Switch Watch](https://github.com/sebia1993/samsung-ies-switch-watch) | [운영 로직](https://github.com/sebia1993/samsung-ies-switch-watch/blob/main/docs/OPERATING_LOGIC.md) | 원격 연결 인증과 데이터 최신성을 어떻게 다루는가 |
| 승인된 사용자 세션 정리 | [Aruba MM Session Cleanup](https://github.com/sebia1993/aruba-mm-session-cleanup) | [안전 모델](https://github.com/sebia1993/aruba-mm-session-cleanup/blob/main/docs/SAFETY_MODEL.md) | 조회 후 대상이 바뀌거나 삭제 결과가 불명확하면 어떻게 멈추는가 |
| 무선 정책 관계 추적 | [Aruba Wireless Policy Mapper](https://github.com/sebia1993/aruba-wireless-policy-mapper) | [보안 모델](https://github.com/sebia1993/aruba-wireless-policy-mapper/blob/main/docs/SECURITY_MODEL_KO.md) | 정책 참조 해석과 실제 트래픽 허용 여부의 차이는 무엇인가 |
| Aruba datapath 세션 추적 | [Aruba Session Tracker](https://github.com/sebia1993/aruba-session-tracker-1) | [README와 사용 흐름](https://github.com/sebia1993/aruba-session-tracker-1#readme) | 활성 MD 확인·필터·이력 저장 실패를 어떻게 다루는가 |
| Windows 무선 경로 진단 | [WLAN Live Path Tester KO](https://github.com/sebia1993/wlan-live-path-tester-ko) | [측정 방법](https://github.com/sebia1993/wlan-live-path-tester-ko/blob/main/docs/MEASUREMENT_METHOD.md) | 프록시·인터페이스·취소가 관측 결과에 어떤 영향을 주는가 |
| 오프라인 패킷 근거 정리 | [WLAN Troubleshooter KO](https://github.com/sebia1993/wlan-troubleshooter-ko) | [오프라인 설계 결정](https://github.com/sebia1993/wlan-troubleshooter-ko/blob/main/docs/adr/0001-no-ai-and-no-network.md) | 캡처에 없는 RF·인증 정보나 불완전한 흐름을 어떻게 판단 보류하는가 |

## 결과를 설명하는 기준

| 근거 | 설명할 수 있는 내용 | 별도로 필요한 확인 |
|---|---|---|
| 코드와 단위 테스트 | 구현한 규칙과 입력·실패 경계 | 실제 장비 출력과의 일치 |
| 가짜 장비·합성 부하 시험 | 정의한 조건의 동시성·복구·저장 동작 | 실제 WLAN·장비 부하·장시간 현장 조건 |
| 커밋별 Windows CI | 해당 러너에서의 빌드·테스트·패키지 검사 결과 | 실제 PC GUI, EDR/GPO, 장비·드라이버 호환성 |
| 태그와 배포 자산·해시 | 특정 버전 파일의 추적 및 무결성 | 실행 파일 서명 여부와 현장 수용 시험 |

패킷 분석기의 규칙 출력은 장애 원인 확정과 구분합니다. 특히 프로토콜 흐름의 연관성은 알려진 패킷 사례와 Wireshark 대조로 추가 검증해야 합니다. 다른 프로젝트도 자동 검증과 실제 운영 성과를 동일시하지 않습니다.

## 기술면접에서 이어갈 설명

- **문제:** 사람이 반복해서 확인하던 입력·판단·산출물은 무엇인가.
- **설계:** 실패를 감지했을 때 중단, 재시도, 부분 결과 보존 중 무엇을 선택했는가.
- **근거:** 그 선택을 확인하는 코드·테스트·CI 실행을 직접 보여줄 수 있는가.
- **한계:** 현재 결과로 확정할 수 없는 내용과 다음 현장 검증 조건은 무엇인가.

성과 수치를 제시하려면 측정 기간·대상·기준선·수집 방법을 함께 준비해야 합니다. 공개 저장소의 테스트 수나 기능 수를 현장 생산성 개선 수치로 바꾸어 표현하지 않습니다.
