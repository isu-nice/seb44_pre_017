package synergy_overflow.answer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import synergy_overflow.adaption.entity.Adaption;
import synergy_overflow.helper.audit.Auditable;
import synergy_overflow.member.entity.Member;
import synergy_overflow.question.entity.Question;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String answerBody;
    @Column(nullable = false,columnDefinition = "boolean default false")
    private boolean adopted;


    @ManyToOne
    @JoinColumn(name = "member_id",nullable = false)
    private Member Writer;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "question_id",nullable = false)
    private Question question;

    @OneToOne(mappedBy = "answer", cascade = CascadeType.REMOVE)
    private Adaption adaption;

//    @OneToMany(mappedBy = "answer", cascade = CascadeType.REMOVE)
//    private List<CommentEntity> comments;
//    public void setComments(CommentEntity comment){
//        this.comments.add(comment);
//        if(comment.getAnswer()!=this) comment.setAnswer(this);

}
