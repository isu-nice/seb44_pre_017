package synergy_overflow.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import synergy_overflow.member.entity.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member,Long> {
    Optional<Member> findByEmail(String email);
}
